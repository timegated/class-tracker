const express = require("express");
const router = express.Router();
const auth = require("../src/middleware/auth");
const Character = require("../models/Characters");
const User = require("../models/User");

router.get("/", auth, async (req, res) => {
    try {
        const characters = await Character.find({
            user: req.user.id
        }).sort({
            date: -1
        });
        res.json(characters);
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
        const newCharacter = new Character({
            characterName,
            characterClass,
            guildName,
            user: req.user.id
        });
        const character = await newCharacter.save();
        res.json(character);
        console.log(character)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    };
});

router.delete("/:id", auth, async (req, res) => {
    try {
        let character = await Character.findById(req.params.id);
        if (!character) {
            return res.status(404).json({ msg: "Contact Not Found" });
        }

        if (character.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: "Not Authorized" });
        };

        await Character.findByIdAndRemove(req.params.id);
        res.json({ msg: "Character Removed" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;