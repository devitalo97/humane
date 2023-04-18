import { Section } from "@/styles/mixin";
import styled, { css } from "styled-components";

export const Container = styled.div`
    height: 100vh;
    @media screen and (max-width: 480px){
        height: fit-content;
    }
`;

export const Wrapper = styled.div`
    position: relative;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr .6fr;
    place-content: center;
    place-items: center;
    gap: 5%;
    ${Section}

    @media screen and (max-width: 480px){
        grid-template-rows: 1fr .6fr;
        grid-template-columns: unset;
        gap: 2em;
        padding: 5%;
        height: fit-content;
    }

`
export const TextWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 1fr min-content;
    grid-gap: 2em;
`
export const VideoWrapper = styled.div``

interface ITextGroup {
    gap?: string
}

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
`
export const TextGroup = styled.div<ITextGroup>`
    display: flex;
    flex-direction: column;
    ${({gap}) => gap && css`
        gap: ${gap};
    `}
`

type ILine = {
    width?: string
    padding?: string
}
export const Line = styled.div<ILine>`
    display: flex;
    align-items: baseline;
    gap: .5em;
    ${({width}) => width && css`
        width: ${width};
    `}
    ${({padding}) => padding && css`
        padding: ${padding};
    `}
`

export type IText = {
    highlight?: boolean
    dark?: boolean
    bw?: boolean
}

export const Text = styled.p<IText>`
    color: var(--white-color);
    ${({highlight}) => highlight && css`
        color: var(--highlight-color);
    `}
    ${({dark}) => dark && css`
        color: var(--dark-color);
    `}

    ${({bw}) => bw && css`
        overflow-wrap: break-word;
    `}
`

export const TextLG = styled(Text)`
    font-size: 32px;
    font-weight: 600;
    line-height: 42px;
    letter-spacing: 0.01em;
    text-align: left;
`

export const TextM = styled(Text)`
    font-size: 32px;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 0.01em;
    text-align: left;
`
export const TextSM = styled(Text)`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.03em;
    text-align: left;

`
