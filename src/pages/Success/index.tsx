import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { OrderContent, OrderInfo, SuccessContainer, SuccessIcon, SuccessSubtitle, SuccessTitle } from "./styles";

import illustration from "../../assets/Illustration.png"
import { CoffeesContexts } from "../../contexts/coffeesContexts";
import { useContext } from "react";

export function Success() {

    const { address, paymentMethod } = useContext(CoffeesContexts)

    return (
        <SuccessContainer>
            <div>
                <SuccessTitle>
                    Uhu! Pedido confirmado
                </SuccessTitle>

                <SuccessSubtitle>Agora é só aguardar que logo o café chegará até você</SuccessSubtitle>
  
                <main>
                    <OrderContent>
                        <OrderInfo>
                            <SuccessIcon>
                                <MapPin weight="fill" fill="var(--white)" />
                            </SuccessIcon>
                            <div>
                                <span>Entrega em 
                                    <span className="strong" > {address?.logradouro}, {address?.uf}</span>
                                </span>
                                <span >{address?.bairro} - {address?.localidade}, {address?.uf}</span>
                            </div>
                        </OrderInfo>

                        <OrderInfo>
                            <SuccessIcon>
                                <Timer weight="fill" fill="var(--white)" />
                            </SuccessIcon>
                            <div>
                                <span>Previsão de entrega</span>
                                <span className="strong" >20 min - 30 min</span>
                            </div>
                        </OrderInfo>

                        <OrderInfo>
                            <SuccessIcon>
                                <CurrencyDollar weight="fill" fill="var(--white)" />
                            </SuccessIcon>
                            <div>
                                <span>Pagamento na entrega</span>
                                <span className="strong" >
                                    {paymentMethod === "debitCard" ? "Cartão de débito" : ( paymentMethod === "creditCard" ? "Cartão de crédito" : "Dinheiro" )}
                                </span>
                            </div>
                        </OrderInfo>
                    </OrderContent>

                    <img src={illustration} alt="" />
                </main>

            </div>
        </SuccessContainer>
    )
}