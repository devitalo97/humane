import { Section } from "@/styles/mixin";
import styled, { css } from "styled-components";

export const Container = styled.div`
    background-color: var(--white-color);
    display: grid;
    grid-template-rows: min-content 1fr min-content;
    min-height: 100vh;
`;

export const NavGhost = styled.div`
    background-color: var(--dark-color);
    height: var(--header-height);
    width: 100%;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    ${Section({ padding: '0 1em 5% 5%' })}
    padding-top: 1em;
    min-height: 100vh;
    width: 680px;
    margin: 0 auto;
`

export const SearchBox = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 1em;
    position: sticky;
    top: calc(var(--header-height) + 1em);
    z-index: 20;
`

export const SeachBoxHeader = styled.div`
    user-select: none;
    h1 {
        color: var(--dark-color)
    }
`

export const SeachBoxContent = styled.div`
    user-select: none;
    width: 100%;
    width: fit-content;
    height: 2.6em;
    border-radius: 24px;
    border: 2px solid rgb(242,242,242);
    background-color: #fff;
    display: flex;
    gap: 1em;
    align-items: center;
    padding: 0 1em;
    :hover, :focus {
        background-color: var(--dark-color);
        box-shadow: 0 1px 6px 0 #171717;
        border-color: rgba(223,225,229,0);
        transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
        color: whitesmoke;
        svg {
            color: inherit;
        }
        cursor: pointer;
    }

    svg {
        height: 24px;
        width: 24px;
        line-height: 24px;
        color: var(--dark-color);
        transform: rotate(90deg);
    }
`

export const PostContainer = styled.div`
    display: grid;
    grid-template-rows: min-content 380px 1fr;
    gap: 1em;
`
export const PostHeader = styled.div`
    position: relative;
    height: 100%;
    width: 100%;

    p:first-child {
        color: #242424;
        letter-spacing: -0.011em;
        line-height: 52px;
        font-size: 42px;
        margin-top: 0px;
        font-style: normal;
        line-height: 1.23;
        font-weight: 700;
        letter-spacing: 0;
    }

    p:last-child {
        font-size: 14px;
        color: #6B6B6B;
        line-height: 20px;
        font-weight: 400;
    }
`

export const PostThumb = styled.div`
    position: relative;
    width: 680px;
    height: auto;
`


export const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;

    p {
        text-align: justify;
        letter-spacing: -0.003em;
        line-height: 32px;
        margin-top: 2em;
        font-size: 20px;
        margin-bottom: -0.46em;
        letter-spacing: -0.004em;
        line-height: 1.58;
        font-style: normal;
        word-break: break-word;
        color: #242424;
        font-weight: 400;
    }
`

