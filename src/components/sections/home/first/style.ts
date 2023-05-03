import { Section } from "@/styles/mixin";
import styled, { css } from "styled-components";

export const Container = styled.div`
    height: 100vh;
    background-image: url(/background_first.svg);
    background-size: cover;
    background-position: center center;
`;

export const Wrapper = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    ${Section}

    @media screen and (max-width: 480px){
        padding: 20% 5% 40% 5% !important;
        align-items: flex-end;    
    }

`
export const ImageWrapper = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;
`
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4em;
    @media screen and (max-width: 480px){
        gap: 5em !important;
    }
`


export const TextGroup = styled.div``

export const Line = styled.div`
    display: flex;
    align-items: baseline;
    gap: .5em;
`

export type IText = {
    highlight?: boolean
}

export const Text = styled.p<IText>`
    color: var(--white-color);
    ${({highlight}) => highlight && css`
        color: var(--highlight-color);
    `}
`

export const TextLG = styled(Text)`
    font-size: clamp(1.75rem, 1.8476rem + 1.5854vw, 2.5rem);
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    @media screen and (max-width: 480px){
        font-size: 32px !important;
    }
`

export const TextM = styled(Text)`
    font-family: Manjari;
    font-size: clamp(1.5rem, 1.2439rem + 1.4634vw, 2rem);
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;

    @media screen and (max-width: 480px){
        font-size: 24px !important;
    }
`
