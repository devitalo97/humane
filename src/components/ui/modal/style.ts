import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.1);
    backdrop-filter: blur(10px);
    z-index: 2000;
    display: grid;
    place-items: center;
    position: fixed; 
    inset: 0;
    overflow: hidden;
`

export const Wrapper = styled.div`
    margin: 0 auto;
    overflow: hidden;
    width: 100%;
    max-width: 1024px;
`