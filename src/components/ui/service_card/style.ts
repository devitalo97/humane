import styled, { css } from "styled-components";

export const Container = styled.div`
    border: none;
    width: 280px;
    height: 100%;
    /* background-color: #E48D00; */
    background-color: var(--highlight-color);
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    gap: 1em;

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


export const TextSM = styled(Text)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.02em;
`

