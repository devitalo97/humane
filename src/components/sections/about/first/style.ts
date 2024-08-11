import { Section } from "@/styles/mixin";
import styled, { css } from "styled-components";

export const Container = styled.div`
    height: fit-content;
    background-color: var(--white-color);
`;

export const NavGhost = styled.div`
    height: var(--header-height);
    width: 100%;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: max(2em, 2%);
    min-height: var(--section-height);
`

interface IHero {
    invert: boolean
}
export const Hero = styled.div<IHero>`
    display: flex;
    align-items: center;
    gap: 10%;
    ${({ invert }) => invert && css`
        flex-direction: row-reverse;
    `}

    @media screen and (max-width: 480px) {
        flex-direction: column
    }
`
export const HeroTextContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1em;
    flex: 50%;
`
export const HeroTitle = styled.p`
    color: #000;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.025rem;
    text-transform: uppercase;
    text-align: justify;
`
export const HeroDescription = styled.p`
    color: #000;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.025rem;
    text-align: justify;
`
export const HeroImageContent = styled.div`
    flex: 40%;
    img {
        width: 100%;
        height: auto;
    }
`


