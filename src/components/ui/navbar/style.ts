import { Section } from '@/styles/mixin'
import styled from 'styled-components'

export const Container = styled.div`
    background-color: transparent;
    height: var(--header-height);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 1000;
    box-shadow: 12px 10px 28px -3px rgba(0,0,0,0.1);
`

export const Title = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 44px;
    letter-spacing: 0.02em;
    color: #E48D00;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${Section}

    @media screen and (max-width: 480px){
        > nav {
            display: none;
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