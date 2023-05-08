import styled from "styled-components"


export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    flex: 1;
    padding: 2rem;

    nav {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
` 

export const Logo = styled.a`
    cursor: pointer;
` 

export const Location = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: 0.25rem;
    background: var(--purple-light);
    border-radius: 6px;

    color: var(--purple-dark);

    padding: 0.5rem;
` 

export const ShoppingCartButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    width: 2.375rem;
    height: 2.375rem;

    border: none;
    border-radius: 6px;

    background: var(--yellow-light);
    cursor: pointer;
` 

export const CoffeeCount = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    top: -25%;
    right: -25%;

    width: 1.25rem;
    height: 1.25rem;

    border: none;
    border-radius: 100%;

    font-size: 0.75rem;
    font-weight: 700;

    color: var(--white);
    background: var(--yellow-dark);
`