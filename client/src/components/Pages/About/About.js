import React from 'react';
import { Grid, Row, Col } from '../../../utils/layout';
import { Hero, HeroHeader, CardContainer, CtaLink, Title, Description } from './AboutComponents';

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
                    <Col size={12}></Col>
                </Row>
                <Row>
                    <Col size={4}>
                        <CardContainer>
                        <Title>Why</Title>
                        <Description>
                            Designed to help players that run end game content keep track of what they currently have.  
                        </Description>
                        </CardContainer>
                    </Col>
                    <Col size={4}>
                        <CardContainer className="ctaCard">
                            <Title>Sign Up</Title>
                            <Description>Click the sign up button up above to get started.</Description>
                            <CtaLink className="cta" to="/signup">Get Started</CtaLink>
                        </CardContainer>
                    </Col>
                    <Col size={4}>
                        <CardContainer>
                        <Title>How</Title>
                        <Description> 
                            Use the form on the home page to add characters you'd like to track items for. 
                        </Description>
                        </CardContainer>
                    </Col>
                </Row>
            </Grid>
        </>

    );
};

export default About;