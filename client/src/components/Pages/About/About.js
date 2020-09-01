import React from 'react';
import styled from 'styled-components';
import bgTrees from '../../../assets/images/bg-trees.jpg';
import { Grid, Row, Col } from '../../../utils/layout';

const Hero = styled.section`
    background: url('${bgTrees}') center;
    background-size: cover;
    box-shadow: inset 250px 250px 250px rgba(0,0,0,0.4);
    color: #000;
    width: 100%;
    position: relative;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-content: center;
`;

const HeroHeader = styled.div`
    color: #FCD100;
    margin: 5rem 0 0 0;
    font-size: 3rem;

    @media (min-width: 320px) and (max-width: 800px) {
        margin: 10rem 0 0 0;
        font-size: 1rem;
    }

    @media (min-width: 801px) and (max-width: 1050px) {
        font-size: 2rem;
    }
`;


const About = () => {
    return (
        <>
            <Hero>
                <HeroHeader>
                    <h1>Keep track of the items you want</h1>
                    <h3>Manage the items you have</h3>
                </HeroHeader>
            </Hero>
           <Grid>
                <Row>
                    <Col size={4}>
                    <h1>Why</h1>
                        <p>Designed to help players that take part in end game content to keep track of what they currently have.
                        Guilds generally face difficulty allocating items to their players, hopefully this will serve as a way to keep track of
                        what items players are hoping to get and ultimately to help a loot council or officers make decisions concerning loot from raid encounters.
                        </p>
                    </Col>
                    <Col size={4}>
                    <h1>How</h1>
                        <p> 
                            Use the form located on the home page to add characters you'd like to track items for.
                        </p>
                    </Col>
                    <Col size={4}>
                    <h1>Sign Up</h1>
                       Click the sign up button up above to get started.
                    </Col>
                </Row>
            </Grid>
        </>

    );
};

export default About;