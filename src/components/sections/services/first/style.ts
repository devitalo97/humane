import { Section } from "@/styles/mixin";
import styled, { css } from "styled-components";

export const Container = styled.div`
    height: 100vh;
    background-color: var(--white-color);
    display: grid;
    grid-template-rows: min-content 1fr min-content;
`;

export const NavGhost = styled.div`
    background-color: var(--dark-color);
    height: var(--header-height);
    width: 100%;
`

export const FooterGhost = styled.div`
    background-color: var(--dark-color);
    height: 1.5em;
    width: 100%;
`
export const Content = styled.div`
    display: grid;
    height: 100%;
    grid-template-rows: 1fr 1fr;
    @media screen and (max-width: 480px) {
        grid-template-rows: unset;
    }
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: min(2%, 1em);
    ${Section}
`
export const ImageWrapper = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;
`
interface ITextGroup {
    gap?: string
}

export const TextGroup = styled.div<ITextGroup>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${({gap}) => gap && css`
        gap: ${gap};
    `}
`

export const Line = styled.div`
    display: flex;
    align-items: baseline;
    gap: .5em;
`

export type IText = {
    highlight?: boolean
    dark?: boolean
    width?: string
}

export const Text = styled.p<IText>`
    color: var(--white-color);
    ${({highlight}) => highlight && css`
        color: var(--highlight-color);
    `}
    ${({dark}) => dark && css`
        color: var(--dark-color);
    `}
    ${({width}) => width && css`
        width: ${width};
    `}
`

export const TextLG = styled(Text)`
    font-style: normal;
    font-weight: 700;
    font-size: clamp(1.5rem, 1.4146rem + 0.4878vw, 2rem);
    line-height: 44px;
    letter-spacing: 0.02em;
`

export const TextM = styled(Text)`
    font-family: Inter;
    font-size: 22px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0.02em;
    text-align: center;
`

export const TextInfo = styled(Text)`
    font-size: clamp(0.875rem, 0.811rem + 0.3659vw, 1.25rem);
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-align: center;
    width: 600px;

    @media screen and (max-width: 480px) {
        width: 100%;
    }
`



