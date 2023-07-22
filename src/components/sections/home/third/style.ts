import { Background, Section } from "@/styles/mixin";
import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--section-height);
    background-color: #fff;
    padding-top: 5%;
`;

export const Wrapper = styled.div`

    ${Background}
    background-size: cover;
    background-position: center center;
    border-radius: 3em;
    box-shadow: 12px 10px 28px -3px rgba(0,0,0,0.3), -12px 10px 28px 3px rgba(0,0,0,0.3);
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    max-width: 1280px;
    width: 100%;
    height: 90%;
    margin: 0 auto;

    @media screen and (max-width: 480px){
        height: 100% !important;
        width: 100% !important;
        border-radius: unset !important;
        background-position: 35% 100%;

    }
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1em;
    height: 100%;
    padding: 5%;
    position: relative;

    @media screen and (max-width: 480px){
        padding: 20% 10% !important;
        ::before {
            position: absolute;
            content: '';
            inset: 5%;
            background: rgba(255, 255, 255, 0.25);
            opacity: 0.4;
            border-radius: 3em;
            box-shadow: 12px 10px 28px -3px rgba(0,0,0,0.1);
        }
    }
`

export type ITextGroup = {
    gap?: string
}
export const TextGroup = styled.div<ITextGroup>`
    display: flex;
    flex-wrap: wrap;
    height: 80%;
    gap: 1em;
    ${({gap}) => gap && css`
        gap: ${gap};
    `}
`

export const HeaderGroup = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 480px){
        align-items: center !important;
    }
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
    font-size: clamp(1.5rem, 1.4146rem + 0.4878vw, 2rem);
    line-height: 39px;

    
    @media screen and (max-width: 480px){
        font-size: 24px !important;
        line-height: 29.05px !important;
        text-align: center;
    }
`

export const TextSM = styled(Text)`
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media screen and (max-width: 480px){
        font-size: 14px !important;
        line-height: 16px !important;
    }
`

export const Box = styled.div`
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 5px;
    width: 2em;
    height: 2em;
    display: grid;
    place-items: center;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: var(--white-color);
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    :hover{
        background-color: rgba(255, 255, 255, 0.4);
    }
`

export type IRow = {
    column?: boolean
    row?: boolean
    gap?: string
    flex?: string
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

    ${({flex}) => flex && css`
        flex: ${flex};
    `}
`

export const Glue = styled.div`
    position: relative;
`