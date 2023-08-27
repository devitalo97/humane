import { Section } from "@/styles/mixin";
import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 140vh;
    height: fit-content;
    background-color: #fff;
    ${Section}
`;

export const Wrapper = styled.div`
    width: 100%;
    position: relative;
    display: grid;
    grid-template-rows: min-content 1fr;
    grid-gap: 2em;
    height: 80%;
    padding: 5% 0;
    @media screen and (max-width: 480px) {
        padding-bottom: unset;
        padding: 10% 0;
    }
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CardGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    gap: 1em;
    width: 100%;
    max-width: 880px;
    margin: 0 auto;
`

export const CardContainter = styled.div`
    flex: calc(50% - 1em);
    @media screen and (max-width: 480px) {
        flex: 100%;
    }
`

export const CardWrapper = styled.div`
    border-radius: 1em;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr min-content;
    :hover {
        cursor: pointer;
    }
`

export const CardContent = styled.div`
    border: 5px solid var(--highlight-color);
    border-radius: 1em 1em 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 250px;
    padding: 1em;

    img {
        width: 50%;
        height: 100%;
    }
`

export const CardFooter = styled.div`
    background: var(--dark-color);
    color: #FFF;
    height: 4em;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    border-radius: 0 0 1em 1em;
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