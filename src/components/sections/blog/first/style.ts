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

export const Title = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: 0.02em;
    color: #E48D00;
`

