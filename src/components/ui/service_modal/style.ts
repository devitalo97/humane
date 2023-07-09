import { Inter } from "next/font/google";
import styled from "styled-components";

interface ContainerProps {
    windowWidth: number
}

export const Container = styled.div<ContainerProps>`
    position: fixed;
    inset: 0;
    backdrop-filter: blur(5px);
    z-index: 1000;
    display: grid;
    place-items: center;
    --space: ${({ windowWidth }) => {
        if (windowWidth < 560) {
            return '1em';
        } else {
            return '2%';
        }
    }};
`
export const Wrapper = styled.div`
    background-color: var(--white-color);
    display: grid;
    grid-template-rows: min-content 1fr;
    position: relative;
    max-width: 1024px;
    margin: 0 auto;
    height: fit-content;
    width: 100%;
    border-radius: 0.875rem;
    box-shadow: 12px 10px 28px -3px rgba(0,0,0,0.1), -12px -10px 28px -3px rgba(0,0,0,0.1);
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: var(--space);

`

export const CardContainer = styled.div`
    display: flex;
    padding: var(--space);
    gap: var(--space);
    @media screen and (max-width: 560px) {
        flex-direction: column;
    }
`
export const CardContent = styled.div`
    flex: 50%;
    @media screen and (max-width: 560px) {
        flex: unset;
    }
`

export const Text = styled.p`
`


export const Title = styled.p`
    font-weight: bold;
`

export const Form = styled.form`
    flex: 50%;
    display: flex;
    flex-direction: column;
    gap: .5em;
`

export const InputContainer = styled.div`
    transition: all .2s ease-in-out;
    width: 100%;
    &:focus-within {
        label {
            color: rgba(12,19,46,1);
        }
    }
`
export const Input = styled.input`
    width: 100%;
    border-radius: 5px;
    height: 32px;
    border: none;
    outline: none;
    transition: all .2s ease-in-out;
    border: 1px solid rgba(12,19,46,.5);
    background-color: rgba(12,19,46,.1);
    padding: 0 1em;
    color: rgba(12,19,46,1);
    :focus {
        border: 1px solid rgba(12,19,46,1);
    }

`
export const Label = styled.label`
    font-size: 14px;
    color: rgba(12,19,46,.5);
`

export const TextAreaContainer = styled.div`
    transition: all .2s ease-in-out;
    width: 100%;
    &:focus-within {
        label {
            color: rgba(12,19,46,1);
        }
    }
`
export const TextArea = styled.textarea`
    width: 100%;
    resize: none;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: all .2s ease-in-out;
    border: 1px solid rgba(12,19,46,.5);
    background-color: rgba(12,19,46,.1);
    padding: 1em;
    color: rgba(12,19,46,1);
    :focus {
        border: 1px solid rgba(12,19,46,1);
    }
`

export const Button = styled.button`
    border-radius: 10px;
    border: none;
    height: 2.5em;
    width: 100%;

    p {
        text-transform: uppercase;
        font-style: normal;
        font-weight: 700;
        font-size: clamp(1rem, 0.9573rem + 0.2439vw, 1rem);
        line-height: 26px;
        color: #FFFFFF;
    }

    background: var(--highlight-color);

    :hover {
        cursor: pointer;
    }
`

