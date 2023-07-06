import styled, { css } from "styled-components";

export const Container = styled.div`
    display: grid;
    width: 100%;
    overflow: hidden;
`

interface IWrapper {
    gap?: string
}
export const Wrapper = styled.div<IWrapper>`
    display: flex;
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    scroll-behavior: smooth;
    user-select: none;
    gap: min(2%, .75rem);
    ${({gap}) => gap && css`
        gap: ${gap};
    `}
    ::-webkit-scrollbar {
        display: none;
    }
`

export const Item = styled.div`
    flex: none;
    height: 100%;
`

export const Navigation = styled.div`
    display: flex;
    justify-content: space-between;
    div {
        background-color: red;
        height: 1em;
        width: 1em;
    }
`
