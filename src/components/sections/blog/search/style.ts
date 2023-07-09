import { Section } from "@/styles/mixin";
import styled, { css } from "styled-components";

export const Container = styled.div`
    background-color: var(--white-color);
    display: grid;
    grid-template-rows: min-content 1fr min-content;
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
    ${Section}
    padding-top: 1em;
`

export const SearchBox = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 1em;
    position: sticky;
    top: calc(var(--header-height) + 1em);
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
    max-width: 768px;
    width: 100%;
    height: 2.6em;
    border-radius: 24px;
    border: 1px solid var(--dark-color);
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
        input::-webkit-search-cancel-button  {
            background:
                linear-gradient(45deg, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 43%,#fff 45%,#fff 55%,rgba(0,0,0,0) 57%,rgba(0,0,0,0) 100%),
                linear-gradient(135deg, transparent 0%,transparent 43%,#fff 45%,#fff 55%,transparent 57%,transparent 100%);
        }
    }
    input {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border: none;
        border-radius: inherit;
        width: 100%;
        height: 100%;
        background: transparent;
        line-height: 22px;
        user-select: none;
        resize: none;
        outline: none;
        
        :hover, ::selection {
            color: whitesmoke;
            border: none;
        }
        ::placeholder {
            color: #5f6368;
        }
        ::-webkit-search-cancel-button {
            -webkit-appearance: none;
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-left: 10px;
            background:
                linear-gradient(45deg, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 43%,#000 45%,#000 55%,rgba(0,0,0,0) 57%,rgba(0,0,0,0) 100%),
                linear-gradient(135deg, transparent 0%,transparent 43%,#000 45%,#000 55%,transparent 57%,transparent 100%);
        }
    }

    svg {
        height: 24px;
        width: 24px;
        line-height: 24px;
        color: var(--dark-color);
    }
`

export const CardGroup = styled.div`
    
`


