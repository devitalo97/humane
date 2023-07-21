import { Section } from '@/styles/mixin'
import styled, { css } from 'styled-components'

export const Container = styled.div`
    height: 50vh;
    width: 100%;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    gap: 2em;
    ${Section}
`

export const Nav = styled.nav`
    display: flex;
    justify-content: flex-start;
    gap: 5em;

    img {
        width: 3em;
        height: auto;
    }
`

export const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
`

type ILine = {
    width?: string
    padding?: string
    margin?: string
    justifyContent?: string
    alignItems?: string
    flexDirection?: string
    display?: string
}
export const Line = styled.div<ILine>`
    display: flex;
    align-items: baseline;
    gap: .5em;
    ${({width}) => width && css`
        width: ${width};
    `}
    ${({padding}) => padding && css`
        padding: ${padding};
    `}
    ${({margin}) => margin && css`
        margin: ${margin};
    `}
    ${({justifyContent}) => justifyContent && css`
        justify-content: ${justifyContent};
    `}
    ${({alignItems}) => alignItems && css`
        align-items: ${alignItems};
    `}
    ${({flexDirection}) => flexDirection && css`
        flex-direction: ${flexDirection};
    `}
`