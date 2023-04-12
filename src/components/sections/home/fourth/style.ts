import { Section } from "@/styles/mixin";
import styled, { css } from "styled-components";

export const Container = styled.div`
    height: 100vh;
`;

export const Hedaer = styled.p``

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10em;
    height: 100%;
    ${Section}
`

export const CardWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2em;

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
`

export const TextGroup = styled.div``

type ILine = {
    width?: string
    padding?: string
    margin?: string
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
    ${({margin}) => margin && css`
        margin: ${margin};
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

export const Header = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: var(--white-color);
`