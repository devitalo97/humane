import { Section } from "@/styles/mixin";
import { Manjari } from "next/font/google";
import styled, { css } from "styled-components";
const manjari = Manjari({subsets: ['latin'], weight: "400"})

export const Container = styled.div`
    height: 100%;
    background-color: var(--dark-color);
`;

export const Wrapper = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    ${Section}

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

    font-family: 'Manjari';
`

export const TextLG = styled(Text)`
    font-family: Manjari;
    font-size: 60px;
    font-weight: 400;
    line-height: 56px;
    letter-spacing: 0em;
    text-align: left;
`

export const TextM = styled(Text)`
    font-family: Manjari;
    font-size: 48px;
    font-weight: 400;
    line-height: 56px;
    letter-spacing: 0em;
    text-align: left;
`
export const TextSM = styled(Text)`
    font-family: Manjari;
    font-size: 24px;
    font-weight: 400;
    line-height: 56px;
    letter-spacing: 0em;
    text-align: left;
`
