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
    justify-content: space-between;
    background: rgba(0, 6, 49, 0.30);
    ${Section}

    @media screen and (max-width: 480px){
        padding: 20% 5% 40% 5% !important;
        align-items: flex-end;    
    }
`

export const EllipseGroup = styled.div`
    position: absolute;
    inset: 0;
    background-color: transparent;
    z-index: 2;
`

export const SmallEllipse = styled.div`
    width: 13.375rem;
    height: 8.5rem;
    flex-shrink: 0;
    background: rgba(207, 207, 226, 0.30);
    filter: blur(100px);
`

export const ExtraEllipse = styled.div`
    width: 13.375rem;
    height: 8.5rem;
    flex-shrink: 0;
    background: rgba(207, 207, 226, 0.30);
    filter: blur(100px);
`

export const MediumEllipse = styled.div`
    border-radius: 20.6875rem;
    background: rgba(255, 255, 255, 0.50);
    filter: blur(100px);
    width: 20.6875rem;
    height: 6.625rem;
    flex-shrink: 0;
    background: rgba(207, 207, 226, 0.30);
    position: absolute;
    left: 5%;
    top: 60%;
    transform: translateY(-60%);
`

export const BigSCircle = styled.div`
    border-radius: 36rem;
    background: rgba(207, 207, 226, 0.30);
    filter: blur(100px);
    width: 36rem;
    height: 33.4375rem;
    flex-shrink: 0;
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);

    @media screen and (max-width: 480px) {
        display: none;
    }
`


export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 2;
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
    ${({ highlight }) => highlight && css`
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
