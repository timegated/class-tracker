const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");
const {
    check,
    validationResult
} = require("express-validator");

const User = require("../models/User");

router.get("/", auth, async (req, res) => {
   try {
       const user = await User.findById(req.user.id).select("-password");
       res.json(user);
   } catch (error) {
       console.error(error.message);
       res.status(500).send("Server Error");
    }; 
});

// For logging in

router.post("/",
    [
        check("email", "Valid email required.").isEmail(),
        check("password", "Password is required.").exists()
    ]
    , async (req, res) => {
    
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    };
    
    const { email, password } = req.body;
        
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        };
        console.log("From auth routes", user);

        const isMatch = await bcrypt.compare(password, user.password);
        console.log("From auth routes: matching pw's", isMatch);
        
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        };

        const payload = {
            user: {
                id: user.id
            }
        };
        jwt.sign(payload, config.get("jwtSecret"), {
            expiresIn: 36000
        }, (err, token) => {
                if (err) throw err;
                res.json({
                    token
                });
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    };
});

module.exports = router;