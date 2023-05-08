import styled from "styled-components"

export const CardContainer = styled.div`
    display: flex;
    `

export const CoffeeImage = styled.img`
    width: 4rem;
    margin-right: 1.25rem;
    `

export const CoffeeTitle = styled.h3`
    font-weight: 400;
    font-size: 1rem;
    color: var(--base-subtitle);
    `

export const CoffeeActions = styled.div`
    display: flex;
    gap: 0.5rem;

    margin-top: 0.5rem;
    margin-right: 3.125rem;
    
    div {
        display: flex;
        align-items: center;
    }
`

export const CoffeeCounter = styled.div`

padding: 0.5rem;
border-radius: 6px;
    background: var(--base-button);

    div {
        display: flex;
        gap: 0.25rem;

        span {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1.25rem;
        }

    }

    button {
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        cursor: pointer;
    }
`

export const CoffeeDelete = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border: none;
    border-radius: 6px;
    background: var(--base-button);
    color: var(--base-text);
    font-size: 0.75rem;
    cursor: pointer;
`

export const CoffeePrice = styled.span`
    font-weight: 700;
    color: var(--base-text);
`