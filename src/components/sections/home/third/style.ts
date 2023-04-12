import { Section } from "@/styles/mixin";
import styled, { css } from "styled-components";

export const Container = styled.div`
    height: var(--section-height);
    background: rgb(172,100,0);
    background: -moz-linear-gradient(43deg, rgba(172,100,0,1) 0%, rgba(229,177,57,1) 100%);
    background: -webkit-linear-gradient(43deg, rgba(172,100,0,1) 0%, rgba(229,177,57,1) 100%);
    background: linear-gradient(43deg, rgba(172,100,0,1) 0%, rgba(229,177,57,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ac6400",endColorstr="#e5b139",GradientType=1);
`;

export const Wrapper = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${Section}
`
export const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3em;
`

export const Overlay = styled.div`
    height: 100%;
    width: 100%;
    background: rgba(0, 6, 49, 0.6);
    z-index: 3;
`

export type ITextGroup = {
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
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    `

export const TextSM = styled(Text)`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    `

export const Box = styled.div`
    background: rgba(255, 255, 255, 0.4);
    border-radius: 5px;
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: var(--white-color);
    `

export type IRow = {
    column?: boolean
    row?: boolean
    gap?: string
}
export const Row = styled.div<IRow>`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    ${({column}) => column && css`
        align-items: flex-start;
        flex-direction: column;
    `}
    ${({gap}) => gap && css`
        gap: ${gap};
    `}
`

export const Glue = styled.div`
    position: relative;
`