import { Section } from "@/styles/mixin";
import styled, { css } from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr .75fr;
    grid-gap: 10%;
    background: var(--white-color);
    padding-left: 5%;
`;

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10%;

`
export const ImageWrapper = styled.div`
    height: 100vh;
    position: relative;
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4em;
`

export const TextGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5em;
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
    font-weight: 700;
    line-height: 39px;
    letter-spacing: 0em;
    text-align: left;
`

export const TextSM = styled(Text)`
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
`
