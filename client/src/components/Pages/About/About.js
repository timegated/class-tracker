import React from 'react';
import styled from 'styled-components';
import bgTrees from '../../../assets/images/bg-trees.jpg';
import { Grid, Row, Col } from '../../../utils/layout';

const Hero = styled.section`
    background: url('${bgTrees}') center;
    background-size: cover;
    box-shadow: inset 250px 250px 250px rgba(0,0,0,0.4);
    color: var(--color-dark-1);
    width: 100%;
    position: relative;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-content: center;
`;

const HeroHeader = styled.div`
    color: var(--font-color-1);
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
const Title = styled.h2`
    font-size: 2.5rem;
`;
const Description = styled.p`
    font-size: 1.5rem;
    line-height: 1.75;

`
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
                    <Col size={12} className="dark">
                        

                    </Col>
                </Row>
                <Row>
                    <Col size={4}>
                    <Title>Why</Title>
                        <Description>
                            Designed to help players that run end game content to keep track of what they currently have.  
                        </Description>
                    </Col>
                    <Col size={4}>
                    <Title>How</Title>
                        <Description> 
                            Use the form on the home page to add characters you'd like to track items for. 
                        </Description>
                    </Col>
                    <Col size={4}>
                    <Title>Sign Up</Title>
                       <Description>Click the sign up button up above to get started.</Description>
                    </Col>
                </Row>
            </Grid>
        </>

    );
};

export default About;