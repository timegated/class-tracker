const express = require("express");
const router = express.Router();
// const config = require("config");
const Player = require("../models/Players");

router.post("/", async (req, res) => {
    const {
        characterName,
        characterClass,
        guildName
    } = req.body;
    try {
        let player = await Player.findOne({
            characterName
        });
        if (player) {
            return res.status(400).json({
                msg: "Player already exists"
            });
        };
        player = new Player({
            characterName,
            characterClass,
            guildName
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    };
});

module.exports = router;