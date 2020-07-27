import React from 'react';
import classes from './About.module.css';

const About = () => {
    return (
        <div className={classes.aboutContent}>
            <h1>About</h1>
            <p>Designed to help players that take part in end game content to keep track of what they currently have.
            Guilds generally face difficulty allocating items to their players, hopefully this will serve as a way to keep track of
            what items players are hoping to get and ultimately to help a loot council or officers make decisions concerning loot from raid encounters.
            </p>
        </div>
    );
};

export default About;