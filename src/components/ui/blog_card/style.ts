import styled, { css } from "styled-components";

export const Container = styled.div`
    border: none;
    width: 100%;
    height: fit-content;
    padding-bottom: 1em;
    box-shadow: inset 0 -1px 0 rgba(230, 230, 230, 1);
    margin-bottom: 1em;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;


    @media screen and (max-width: 480px) {
        flex-direction: column-reverse;
        gap: 1em;
    }
`

export const ImageWrapper = styled.div`
    > img {
        width: 90%;
        height: auto;
        border-radius: 10px;
    }
`
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    flex: .7;

    @media screen and (max-width: 480px) {
        > p:nth-child(3){
            display: none;
        }
    }

    .footer {
        display: flex;
        gap: 1em;
        align-items: center;
    }
` 


export const Title = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    color: #000000;
`

export const Author = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #000000;
`

export const Content = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #5F5F5F;
`


export const Text = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: #5F5F5F;
`

export const Point = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: #5F5F5F;
    text-align: center;
`

export const Category = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 22px;
    color: rgba(117, 117, 117, 1);
    background-color: rgba(230, 230, 230, 1);
    padding: 2px 8px;
    white-space: nowrap;
    border-radius: 100px;
`



