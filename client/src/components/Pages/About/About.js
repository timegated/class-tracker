import React from 'react';
import styled from 'styled-components';
import classes from './About.module.css';
import bgTrees from '../../../assets/images/bg-trees.jpg';

const Hero = styled.section`
    background: url('${bgTrees}') center;
    background-size: cover;
    box-shadow: inset 250px 250px 250px rgba(0,0,0,0.3);
    color: #000;
    width: 100%;
    position: relative;
    height: 50vh;
    margin: 5rem 0 0 0;
    display: flex;
    justify-content: center;
`

const HeroHeader = styled.div`
    color: #FCD100;
    margin: 5rem 0 0 0;
    font-size: 42px;
`

const About = () => {
    return (
        <>
            <Hero>
                <HeroHeader>
                    <h1>Take Control of Your Inventory</h1>
                    <h4>Learn more about your class</h4>
                </HeroHeader>
            </Hero>
            <div className={classes.aboutContent}>
            <h1>About</h1>
            <p>Designed to help players that take part in end game content to keep track of what they currently have.
            Guilds generally face difficulty allocating items to their players, hopefully this will serve as a way to keep track of
            what items players are hoping to get and ultimately to help a loot council or officers make decisions concerning loot from raid encounters.
            </p>
        </div>
        </>
        
    );
};

export default About;