import { Section } from "@/styles/mixin";
import styled, { css } from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    ${Section}
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
    position: sticky;
    top: 5em;

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

export const TextGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    text-align: center;
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
`

export const TextM = styled(Text)`
    font-size: 32px;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 0.01em;
`
export const TextSM = styled(Text)`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.03em;

`
