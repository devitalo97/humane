import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    width: 100%;
    overflow: hidden;
`
export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    overflow-x: scroll;
    scroll-behavior: smooth;
    user-select: none;
    gap: min(2%, .75rem);
    ::-webkit-scrollbar {
        display: none;
    }
`

export const Item = styled.div`
    flex: none;
    height: fit-content;
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
