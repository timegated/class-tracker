const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");
const cors = require("../middleware/cors");
const {
    check,
    validationResult
} = require("express-validator");

const User = require("../models/User");

// @route POST api/auth
// @desc  Get logged in user
// @access PRIVATE

router.get("/", cors, auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

// @route POST
// @desc  Authenticating a user
// @access PUBLIC


router.post("/",
    [
        check("email", "Include a valid email").isEmail(),
        check("password", "Password is required").exists()
    ], cors, async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        try {

            let user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ msg: "invalid credentials" });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ msg: "invalid credentials" })
            }
            const payload = {
                user: {
                    id: user.id
                }
            };
            // console.log(payload);
            //  jsonwebtoken method to sign the token, payload (user object) is passed in, and the jwtSecret is grabbed from the config object
            jwt.sign(payload, config.get("jwtSecret"),
                {
                    expiresIn: 3600000
                },
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        token
                    });
                });
        } catch (err) {
            console.error(error.message);
            res.status(500).send("Server error");
        };
    });

module.exports = router;