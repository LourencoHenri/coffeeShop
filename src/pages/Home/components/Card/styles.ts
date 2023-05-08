import styled from "styled-components"


export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background: var(--base-card);
    border-radius: 6px 36px 6px 36px;
    
    padding: 1.25rem;
`

export const CoffeeImage = styled.img`
    margin-top: -2.5rem;
    width: 6.25rem;
`

export const CoffeeCharacteristics = styled.span`
    display: flex;
    gap: 0.25rem;
`

export const CoffeeCharacteristic = styled.span`
    background: var(--yellow-light);
    color: var(--yellow-dark);
    font-size: 0.625rem;
    font-weight: 700;
    margin-top: 0.75rem;
    margin-bottom: 1rem;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
`

export const CoffeeTitle = styled.h3`
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    color: var(--base-subtitle);
    margin-bottom: 0.5rem;
`

export const CoffeeDescription = styled.span`
    color: var(--base-label);
    text-align: center;
    font-size: 0.875rem;
    margin-bottom: 2rem;
`

export const CoffeePrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 0.875rem;
    color: var(--base-text);
    
    span {
        font-family: "Baloo 2", sans-serif;
        font-size: 1.5rem;
        color: var(--base-text);
    }
`

export const Price = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    color: var(--base-text);
    
    span {
        font-family: "Baloo 2", sans-serif;
        font-size: 1.5rem;
        color: var(--base-text);
    }
`

export const Actions = styled.div`
    display: flex;
    gap: 0.5rem;
`

export const Amount = styled.div`
    display: flex;
    align-items: center;
    border-radius: 6px;
    background: var(--base-button);

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    span {
        text-align: center;
        font-size: 1rem;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        width: 1.25rem;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;

        background: transparent;
        border: none;
        cursor: pointer;
        margin: 0.75rem 0.5rem;
    }
`

export const ShoppingCartButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--purple-dark);
    border-radius: 6px;

    width: 2.375rem;
    height: 2.375rem;
    border: none;

    cursor: pointer;

    transition: 0.2s;

    :hover {
        background: var(--purple);
    }
`