import { Section } from '@/styles/mixin'
import styled from 'styled-components'

export const Container = styled.div`
    /* background-color: var(--dark-color); */
    height: var(--header-height);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 1000;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${Section}
`

export const Nav = styled.nav`
    display: flex;
    justify-content: flex-start;
    gap: 5em;
`

export const Text = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: clamp(1.125rem, 1.1037rem + 0.122vw, 1rem);
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
`