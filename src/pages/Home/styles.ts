import styled from "styled-components"


export const HomeContainer = styled.div`   
`

export const Intro = styled.main`
    margin: 5.75rem auto;

    display: flex;
    gap: 3.5rem;

    > div {
        display: flex;
        flex-direction: column;
        gap: 4.125rem;
    }
`

export const BlurBackground = styled.img`
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
`

export const HomeTitle = styled.div`

    h1 {
        font-family: "Baloo 2";
        font-weight: 800;
        font-size: 3rem;
        line-height: 1.3;
        margin-bottom: 1rem;
    }

    span {
        font-size: 1.25rem;
        line-height: 1.3;
        color: var(--base-subtitle);
    }
` 

export const HomeItems = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr;
    column-gap: 2.5rem;
    row-gap: 1.25rem;
`

export const ShoppingCartItem = styled.div`
    display: flex;
    gap: 0.75rem;
    color: var(--base-text);

    div {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 2rem;
        height: 2rem;
        border-radius: 50%;

        background: var(--yellow-dark);
    }
`

export const PackageItem = styled.div`
    display: flex;
    gap: 0.75rem;
    color: var(--base-text);

    div {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 2rem;
        height: 2rem;
        border-radius: 50%;

        background: var(--base-text);
    }
`

export const TimerItem = styled.div`
    display: flex;
    gap: 0.75rem;
    color: var(--base-text);

    div {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 2rem;
        height: 2rem;
        border-radius: 50%;

        background: var(--yellow);
    }
`

export const CoffeeItem = styled.div`
    display: flex;
    gap: 0.75rem;
    color: var(--base-text);

    div {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 2rem;
        height: 2rem;
        border-radius: 50%;

        background: var(--purple);
    }
`

export const CoffeeList = styled.div`

    h2 {
        font-family: "Baloo 2", sans-serif;
        font-size: 2rem;
        color: var(--base-subtitle);
    }
`

export const List = styled.div`
    margin-top: 3.375rem;
    margin-bottom: 10rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 2.5rem;
    column-gap: 2rem;
`