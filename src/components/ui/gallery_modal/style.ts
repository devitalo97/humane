import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    inset: 0;
    background: linear-gradient(180deg, #00062E 2.08%, #000631 51.04%, #092150 100%);
    z-index: 1000;
    display: grid;
    place-items: center;
`
export const Wrapper = styled.div`
    position: relative;
    max-width: 1024px;
    margin: 0 auto;
    height: 80%;
    width: 100%;
    border-radius: 0.875rem;
    background: rgba(0, 0, 0, 0.50);
    display: grid;
    grid-template-rows: min-content 1fr;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2%;
`

export const CardContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr min-content;
    gap: 2%;
    padding: 0 2% 2%;
`
export const CardContent = styled.div`
    position: relative;
`
export const CardFooter = styled.div``

export const Text = styled.p`
    text-transform: capitalize;
    text-align: justify;
    color: #FFF;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Title = styled.p`
    font-weight: bold;
    text-transform: capitalize;
    color: #FFF;
    font-size: 1.2rem;
    font-style: normal;
    line-height: normal;
`



