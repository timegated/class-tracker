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

// For registering first-time users
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
    const {
        email,
        password
        } = req.body;
        
    try {
        let user = await User.find({
            email
        });

        user = new User({
            email,
            password
        });


        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        const payload = {
            user: {
                id: user.id
            }
        };
        console.log(payload);
        jwt.sign(payload, config.get("jwtSecret"), {
            expiresIn: 36000
        }, (err, token) => {
            if (err) throw err;
                res.json({ token });
                console.log({ token })
        });
        
    } catch (error) {
        console.error(error.message);
        res.status(400).send("Server Error")
    };
});

module.exports = router;