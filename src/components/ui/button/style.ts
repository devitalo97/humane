import styled, { css } from 'styled-components'

interface IWrapper {
    primary?: boolean
    secondary?: boolean
    width?: string
}
export const Wrapper = styled.button<IWrapper>`
    border-radius: 10px;
    border: none;
    height: 3.5em;
    width: 22em;
    box-shadow: 0px 5px 4px rgba(95, 95, 95, 0.2);
    transition: all .2s cubic-bezier(0.32, 0, 0.67, 0) 0s;
    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: clamp(1rem, 0.9573rem + 0.2439vw, 1rem);
        line-height: 26px;
        color: var(--dark-color);
    }

    background: var(--highlight-color);

    ${({secondary}) => secondary && css`
        background: rgba(255, 255, 255, 0.3);
    `}

    ${({width}) => width && css`
        width: ${width};
    `}


    :hover {
        cursor: pointer;
        transform: translateY(-2px);
        filter: saturate(70%);
    }

`