import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Hero = styled.section`
    background: var(--neutral-color-grey-1);
    color: var(--primary-color-yellow-1);
    width: 100%;
    position: relative;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-content: center;
`;

export const HeroHeader = styled.div`
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
export const CardContainer = styled.div`
    text-align: center;
    background-color: var(--neutral-color-grey-1);
    margin: 1.5rem .4rem;
    border-top: 3px solid var(--primary-color-yellow-1);
    padding: 2rem;

    &.ctaCard {
        border-top: 3px solid var(--primary-color-red-2);
        height: 100%;
        min-height: 250px;
    }
`;
export const CtaLink = styled(Link)`
        border: 1px solid var(--primary-color-yellow-1);
        border-radius: 10px;
        font-size: 1.8rem;
        padding: 0.5rem;
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1;
        text-decoration: none;
        color: var(--primary-color-yellow-1);
        margin-top: 5rem;

        &:hover {
        background: var(--primary-color-yellow-1);
        color: #000;
        }
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    color: var(--primary-color-yellow-2);
`;
export const Description = styled.p`
    font-size: 1.5rem;
    line-height: 1.75;
    color: var(--primary-color-yellow-2);
`;
