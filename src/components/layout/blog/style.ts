import styled from "styled-components"

export const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 400px;
    position: relative;
    background-color: #fff;
`

export const SideBar = styled.div`
    box-shadow: inset 1px 0px 0 rgba(230, 230, 230, 1);
    padding: 5%;
`

export const SideBarWrapper = styled.div`
    position: sticky;
    top: calc(var(--header-height) + 1em);
`

export const SideBarContainer = styled.div`
    box-shadow: inset 0 -1px 0 rgba(230, 230, 230, 1);
    padding-bottom: 1em;
    margin-bottom: 1em;
    gap: 1em;
    display: grid;
    grid-template-rows: min-content 1fr;
`

export const SideBarHeader = styled.div`
    p {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: var(--dark-color);
        text-transform: capitalize;
    }
`

export const SideBarContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`

export const SideBarOption = styled.div`
    display: flex;
    flex-direction: column;
    gap: .2em;
    p:first-child {
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        color: #aaa;
    }

    p:last-child {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        color: var(--dark-color);
        width: 99%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`



export const RecommendationContainer = styled(SideBarContainer)``
export const RecommendationHeader = styled(SideBarHeader)``
export const RecommendationContent = styled(SideBarContent)``
export const RecommendationOption = styled(SideBarOption)``

export const FilterContainer = styled(SideBarContainer)``
export const FilterHeader = styled(SideBarHeader)``
export const FilterContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: .5em;
`
export const FilterOption = styled.div`
    border: 1px solid rgb(242, 242, 242);
    padding: 8px 16px;
    width: fit-content;
    border-radius: 100px;
    background-color: rgba(230,230,230,1);
    p {
        white-space: nowrap;
        color: rgba(117,117,117,1);
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
    }
    :hover{
        cursor: pointer;
    }
`