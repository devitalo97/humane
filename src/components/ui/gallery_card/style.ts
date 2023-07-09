import { Background } from "@/styles/mixin";
import styled, { css } from "styled-components";

export const Container = styled.div`
    border: none;
    flex: 22%;
    width: 100%;
    height: 374px;
    border-radius: 1em;
    ${Background}
    box-shadow: 12px 10px 28px -3px rgba(0,0,0,0.5);
    :hover{
        cursor: pointer;
        scale: 1.05;
        transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    @media screen and (max-width: 560px){
        flex: 100%;
    }
`

export const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr min-content;
    height: 100%;
    width: 100%;
    gap: 1em;
    border-radius: inherit;
`

export const TextContent = styled.div`
    padding: 0 min(5%, 1em) 5% min(5%, 1em);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .75em;
`

export type IText = {
    highlight?: boolean
    dark?: boolean
    bw?: boolean
}

export const Text = styled.p<IText>`
    color: var(--white-color);
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
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.02em;
`

export const TextSM = styled(Text)`
    color: #FFF;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: justify;
`


