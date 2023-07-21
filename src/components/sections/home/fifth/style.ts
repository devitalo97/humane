import { Section } from "@/styles/mixin";
import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--section-height);
    background-color: #fff;
    ${Section}
`;

export const Wrapper = styled.div`
    width: 100%;
    position: relative;
    display: grid;
    grid-template-rows: min-content 1fr;
    grid-gap: 1em;
    height: 100%;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CardGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 80%;
    gap: 1em;
`

export const CardContainter = styled.div`
    flex: calc(50% - 1em);
`

export const CardWrapper = styled.div`
    border-radius: 1em;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr min-content;
`

export const CardContent = styled.div`
    background: var(--highlight-color);
`

export const CardFooter = styled.div`
    background: var(--dark-color);
    color: #FFF;
    height: 5em;
`

export type IText = {
    highlight?: boolean
    dark?: boolean
    bw?: boolean
}

export const Text = styled.p<IText>`
    color: var(--dark-color);
    ${({ highlight }) => highlight && css`
    color: var(--highlight-color);
    `}
    ${({ dark }) => dark && css`
    color: var(--dark-color);
    `}
    
    ${({ bw }) => bw && css`
    overflow-wrap: break-word;
    `}
    `

export const TextLG = styled(Text)`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;

    @media screen and (max-width: 480px){
        font-size: 24px !important;
        line-height: 29.05px !important;
        text-align: center;
    }   
`

export const TextSM = styled(Text)`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    @media screen and (max-width: 480px){
        font-size: 14px !important;
        line-height: 16px !important;
    }   
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

    ${({ column }) => column && css`
        align-items: flex-start;
        flex-direction: column;
    `}
    ${({ gap }) => gap && css`
        gap: ${gap};
    `}
`

export const Glue = styled.div`
    position: relative;
`