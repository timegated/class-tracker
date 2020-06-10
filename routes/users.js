const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const {
    check,
    validationResult
} = require("express-validator");

const User = require("../models/User");

router.get("/", async (req, res) => {
    try {
        const user = await User.findById(req.user);
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    };
});

router.post("/",
    [
    check("email", "Email required").not().isEmpty(),
    check("password", "Password longer than six characters required.").isLength({min: 6})
    ],
    async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    };
    console.log(req.body)
    const {
        email,
        password
        } = req.body;
        
    try {
        let user = await User.find({
            email
        });

        // if (user) {
        //     return res.status(400).json({
        //         msg: "User already exists"
        //     });
        // };

        user = new User({
            email,
            password
        });

        console.log(user)

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, config.get("jwtSecret"), {
            expiresIn: 3600000
        }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
        
        console.log(payload)
    } catch (error) {
        console.error(err.message);
        res.status(400).send("Server Error")
    };
});

module.exports = router;