import { Background, Section } from '@/styles/mixin'
import styled, { css } from 'styled-components'

interface IContainter {
    isScrolled: boolean
    inHome: boolean
}

export const Container = styled.div<IContainter>`
    background-color: transparent;
    height: var(--header-height);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 1000;
    transition: all .2 cubic-bezier(0.075, 0.82, 0.165, 1);
    ${({ isScrolled }) => isScrolled && css`
        transition: all .2 cubic-bezier(0.075, 0.82, 0.165, 1);
        ${Background}
    `}
    ${({ inHome }) => !inHome && css`
        ${Background}
    `}
`

export const Title = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 44px;
    letter-spacing: 0.02em;
    color: var(--highlight-color);
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${Section}

    @media screen and (max-width: 480px){
        > nav {
            gap: 1em;
        }
    }

    > span {
        display: flex;
        align-items: center;
        gap: 1em;
    }
`

export const Nav = styled.nav`
    display: flex;
    justify-content: flex-start;
    gap: 5em;
`

export const Text = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: clamp(.75rem, 1.1037rem + 0.122vw, 1rem);
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
`