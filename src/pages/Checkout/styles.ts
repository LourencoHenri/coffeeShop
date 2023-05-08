import styled from "styled-components"

export const CheckoutContainer = styled.div` 
    display: flex;
    gap: 2rem;

    > div:last-child {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`

export const CheckoutTitle = styled.h2`   
    color: var(--base-subtitle);
    font-family: "Baloo 2", sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 1rem;
`

export const Address = styled.div`  
    width: 40rem;
    padding: 2.5rem;
    margin-bottom: 0.75rem;
    border-radius: 6px;

    background: var(--base-card);
`

export const AddressHeader = styled.div` 
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.5rem;

    div {
        display: flex;
        flex-direction: column;

        h2 {
            color: var(--base-subtitle);
            font-weight: 400;
            font-size: 1rem;
        }

        span {
            color: var(--base-text);
            font-size: 0.875rem;
        }
    }
`

export const AddressForm = styled.form` 
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const BaseForm = styled.input`
    padding: 0.75rem;
    border: 1px solid var(--base-button);
    border-radius: 4px;
    background-color: var(--base-input);
    color: var(--base-label);

    &::placeholder {
        color: var(--base-label);
    }
`

export const CepInput = styled(BaseForm)`
    width: 12.5rem;
    color: var(--base-text);

    &::placeholder {
        color: var(--base-label);
        }
`

export const StreetInput = styled(BaseForm)`
    display: flex;
    color: var(--base-text);

    &::placeholder {
        color: var(--base-label);
        }
`

export const AddressNumberAndAdjunct = styled.div`
    display: flex;
    gap: 0.5rem;

    input {
        padding: 0.75rem;
        border: 1px solid var(--base-button);
        border-radius: 4px;
        background-color: var(--base-input);
        color: var(--base-text);

        &::placeholder {
        color: var(--base-label);
        }

        &:first-child {
            width: 12.5rem;
        }

        &:last-child {
            display: flex;
            flex: 1;
        }
    }
`

export const NeighborhoodCityAndUF = styled.div`
    display: flex;
    gap: 0.5rem;
    

    input {
        padding: 0.75rem;
        border: 1px solid var(--base-button);
        border-radius: 4px;
        background-color: var(--base-input);
        color: var(--base-text);

        &::placeholder {
        color: var(--base-label);
        }

        &:first-child {
            width: 12.5rem;
        }

        &:nth-child(2) {
            display: flex;
            flex: 1;
        }

        &:last-child {
            width: 3.75rem;
        }
    }
`

export const Payment = styled.div` 
    width: 40rem;
    padding: 2.5rem;
    border-radius: 6px;

    background: var(--base-card);
`

export const PaymentHeader = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    div {
        h2 {
            color: var(--base-subtitle);
            font-weight: 400;
            font-size: 1rem;
        }

        span {
            color: var(--base-text);
            font-size: 0.875rem;
        }
    }
`

export const PaymentMethods = styled.div`  
    display: flex;
    gap: 1rem;

    button {
        border: none;
        border-radius: 6px;

        padding-left: 1rem;
        padding-top: 1rem;
        padding-bottom: 1rem;

        display: flex;
        gap: 0.75rem;
        flex: 1;
        align-items: center;

        cursor: pointer;

        font-size: 0.75rem;
        font-weight: 400;
        color: var(--base-text);
        background: var(--base-button);

        box-sizing: border-box;
        
        &.selected {
            box-sizing: border-box;
            background: var(--purple-light);
            border: 1px solid var(--purple);

            transition: 0.2s;
        }
    }
`

export const SelectedCoffees = styled.div`
    width: 100%;
    border-radius: 6px 44px 6px 44px;
    padding: 2.5rem;
    background: var(--base-card);
`

export const CoffeeImage = styled.img`
    width: 4rem;
    margin-right: 1.25rem;
`

export const CoffeeContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const CoffeeTitle = styled.h3`
    font-weight: 400;
    font-size: 1rem;
    color: var(--base-subtitle);
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

export const Divider = styled.div`
    content: "";
    margin: 1.5rem 0rem;
    border: 1px solid var(--base-button);
`

export const TotalPrice = styled.div`
    font-size: 1.25rem;
    font-weight: 700;
    color: red;

    span {

    }
`

export const PriceDescription = styled.div`

    > div {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        div {
            display: flex;
            justify-content: space-between;
    
            span {
                color: var(--base-text);
            }
        }
    }

    a {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        margin-top: 1.5rem;
        padding: 0.75rem;
        border-radius: 6px;
        background: var(--yellow);
        color: var(--white);
        border: none;
        cursor: pointer;
        text-decoration: none;
    }

`