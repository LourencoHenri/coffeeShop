import styled from "styled-components";

export const SuccessContainer = styled.div`
    main {
        display: flex;
        justify-content: space-between;
    }
`

export const SuccessTitle = styled.h2`
    margin-bottom: 0.25rem;
    font-family: "Baloo 2", sans-serif;
    color: var(--yellow-dark);
    font-size: 2rem;
`

export const OrderContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;    
    padding: 2.5rem;
    width: 32.875rem;
    border-radius: 6px 36px 6px 26px;
    border: 1px solid var(--purple);
`

export const SuccessIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    background: var(--purple);
`

export const OrderInfo = styled.div`
    display: flex;
    gap: 0.75rem;
    color: var(--base-text);

    span {
        &.strong {
            font-weight: 700;
        }
    }


    div {
        &:last-child {
            display: flex;
            flex-direction: column;
        }
    }
`

export const OrderDelivery = styled.div`
    
`

export const SuccessSubtitle = styled.div`
    margin-bottom: 2.5rem;
`