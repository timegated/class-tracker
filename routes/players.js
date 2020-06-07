const express = require("express");
const router = express.Router();
const config = require("config");
const Player = require("../models/Players");

router.get("/", async (req, res) => {
    try {
        const players = await Player.find({
            player: req.player.id
        }).sort({
            date: -1
        });
        res.json(players);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    };
});

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
        res.json(player);
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