const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Player = require("../models/Players");
const User = require("../models/User");

router.get("/", auth, async (req, res) => {
    try {
        const players = await Player.find({
            user: req.user.id
        }).sort({
            date: -1
        });
        res.json(players);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    };
});

router.post("/", auth, async (req, res) => {
    const {
        characterName,
        characterClass,
        guildName
    } = req.body;
    try {
        const newPlayer = new Player({
            characterName,
            characterClass,
            guildName,
            user: req.user.id
        });
        const player = await newPlayer.save();
        res.json(player);
        console.log(player)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    };
});

module.exports = router;