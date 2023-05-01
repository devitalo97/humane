import { Section } from "@/styles/mixin";
import styled, { css } from "styled-components";
import { RiDoubleQuotesL } from 'react-icons/ri'

export const Container = styled.div`
    border-radius: 8px;
    border: none;
    width: 280px;
    height: 450px;
    position: relative;
    display: flex;
    align-items: flex-end;
`

export const Wrapper = styled.div`
    background-color: var(--white-color);
    border-radius: 8px;
    border: none;
    width: 280px;
    height: 380px;
    padding: 1em;
    position: relative;
`


export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4em;
`

export const TextGroup = styled.div`
    margin-top: 30%;
`

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
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
`

export const TextM = styled(Text)`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
`
export const TextSM = styled(Text)`
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;

`
export const Quote = styled(RiDoubleQuotesL)`
    position: absolute;
    color: var(--dark-color);

`

export const ImageWrapper = styled.div`
    position: absolute;
    right: 50%;
    transform: translate(50%, -50%);
    top: 0;
`

export const Footer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1.5em 1em;
    display: flex;
    flex-direction: column;
    gap: .5em;
`

