import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react";
import { CheckoutContainer, Address, Payment, PaymentMethods, PaymentHeader, AddressHeader, AddressForm, CepInput, StreetInput, AddressNumberAndAdjunct, NeighborhoodCityAndUF, CheckoutTitle, CoffeeImage, CoffeeContent, CoffeeTitle, CoffeeCounter, CoffeeActions, CoffeeDelete, CoffeePrice, Divider, TotalPrice, PriceDescription, SelectedCoffees } from "./styles";
import { CheckoutCoffeeCard } from "./components/CheckoutCoffeeCard";
import { CoffeesContexts } from "../../contexts/coffeesContexts";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

interface AddressProps {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
}

interface PaymentMethodsProps {
    creditCard: string;
    debitCard: string;
    cash: string;
}

export function Checkout() {

    const { paymentMethod, handlePaymentMethod, address, selectedCoffees, setCep, cep } = useContext(CoffeesContexts)

    return (
        <CheckoutContainer>
            <div>
                <CheckoutTitle>Complete o seu pedido</CheckoutTitle>
                <Address>
                    <AddressHeader>
                        <MapPinLine size={22} color="var(--yellow-dark)" />
                        <div>
                            <h2>Endereço de Entrega</h2>
                            <span>Imforme o endereço onde deseja receber seu pedido.</span>
                        </div>
                    </AddressHeader>

                    <AddressForm>
                        <CepInput type="text" placeholder="CEP" onChange={(e) => {
                            setCep(e.target.value)
                        }} value={cep.replace(/^(\d{5})(\d)/, '$1-$2')} maxLength={9} />
                        <StreetInput type="text" placeholder="Rua" value={address ? address.logradouro : ""} />
                        <AddressNumberAndAdjunct>
                            <input type="text" placeholder="Número" required />
                            <input type="text" placeholder="Complemento" />
                            
                        </AddressNumberAndAdjunct>
                        <NeighborhoodCityAndUF>
                            <input type="text" placeholder="Bairro" value={address ? address.bairro : ""} />
                            <input type="text" placeholder="Cidade" value={address ? address.localidade : ""} />
                            <input type="text" placeholder="UF" value={address ? address.uf : ""} />
                        </NeighborhoodCityAndUF>
                    </AddressForm>
                </Address>
                <Payment>
                    <PaymentHeader>
                        <CurrencyDollar size={22} weight="fill" fill="var(--purple)"/>
                        <div>
                            <h2>Pagamento</h2>
                            <span>
                                O pagamento é feito na entrega. Escolha a forma que deseja pagar.
                            </span>
                        </div>
                    </PaymentHeader>
                    <PaymentMethods>
                        <button className={paymentMethod === "creditCard" ? "selected" : ""} onClick={() => handlePaymentMethod("creditCard")} >
                            <CreditCard size={16} color="var(--purple)" />
                            <span>CARTÃO DE CRÉDITO</span>
                        </button>
                        <button className={paymentMethod === "debitCard" ? "selected" : ""} onClick={() => handlePaymentMethod("debitCard")}>
                            <Bank size={16} color="var(--purple)" />
                            <span>CARTÃO DE DÉBITO</span>
                        </button>
                        <button className={paymentMethod === "cash" ? "selected" : ""} onClick={() => handlePaymentMethod("cash")}>
                            <Money size={16} color="var(--purple)" />
                            <span>DINHEIRO</span>
                        </button>
                    </PaymentMethods>
                </Payment>
            </div>

            <div>
                <CheckoutTitle>Cafés selecionados</CheckoutTitle>
                <SelectedCoffees>
                    <CoffeeContent>
                        {selectedCoffees.map((coffee) => {
                            return (
                                <>
                                    <CheckoutCoffeeCard
                                        key={coffee.id}
                                        id={coffee.id}
                                        name={coffee.name}
                                        characteristics={coffee.characteristics}
                                        description={coffee.description}
                                        price={coffee.price}
                                        image={coffee.image}
                                        quantity={coffee.quantity}
                                    />
                                    <Divider/>
                                </>
                            )
                        })}
                    </CoffeeContent>
                    <PriceDescription>
                        <div>
                            <div>
                                <span>Total de itens</span>
                                <span>{(selectedCoffees.reduce((a, b) => a + (b.price * b.quantity), 0)).toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</span>
                            </div>
                            <div>
                                <span>Entrega</span>
                                <span>{(selectedCoffees.reduce((a, b) => a + (b.price * b.quantity) % 2, 0)).toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</span>
                            </div>
                            <TotalPrice>
                                <span>Total</span>
                                <span>{(selectedCoffees.reduce((a, b) => a + (b.price * b.quantity) + (b.price * b.quantity) / 10, 0)).toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</span>
                            </TotalPrice>
                        </div>
                        <a href="/success" onClick={() => {
                            if (paymentMethod) {
                                const stateJSON = JSON.stringify(paymentMethod)
                                localStorage.setItem("@paymentMethod:1.0.0", stateJSON)
                            }
                        }} >
                            CONFIRMAR PEDIDO
                        </a>
                    </PriceDescription>
                </SelectedCoffees>
            </div>
        </CheckoutContainer>
    )
}
