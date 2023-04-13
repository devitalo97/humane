import { Section } from "@/styles/mixin";
import styled, { css } from "styled-components";
import { RiDoubleQuotesL } from 'react-icons/ri'

export const Wrapper = styled.div`
    padding: 2em 5em;
    background-color: var(--white-color);
    border-radius: 8px;
    border: none;
    width: 100%;
    height: 60vh;
    position: relative;
    border-radius: 16px;
    display: grid;
    grid-template-rows: min-content 1fr min-content;
`
export const TextWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4em;
    place-content: center;
`
type ITextGroup = {
    gap?: string
}
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
    margin?: string
    justifyContent?: string
    alignItems?: string
    flexDirection?: string
    display?: string
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
    ${({justifyContent}) => justifyContent && css`
        justify-content: ${justifyContent};
    `}
    ${({alignItems}) => alignItems && css`
        align-items: ${alignItems};
    `}
    ${({flexDirection}) => flexDirection && css`
        flex-direction: ${flexDirection};
    `}
`

export type IText = {
    highlight?: boolean
    dark?: boolean
    bw?: boolean
    textTransform?: string
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

    ${({textTransform}) => textTransform && css`
        text-transform: ${textTransform};
    `}
`

export const TextLG = styled(Text)`
    font-size: 32px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
`

export const Title = styled(TextLG)`
    position: relative;
    ::before{
        content: '';
        bottom: 0;
        border: 3px solid var(--highlight-color);
        position: absolute;
        transform: translateY(200%);
        width: 110px;
    }
`

export const TextM = styled(Text)`
    font-size: 24px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
`
export const TextSM = styled(Text)`
    font-size: 20px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
`

export const TextESM = styled(Text)`
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
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

