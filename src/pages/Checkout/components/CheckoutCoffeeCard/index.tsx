import { CoffeeDelete, CoffeeCounter, CoffeeActions, CoffeeTitle, CoffeePrice, CardContainer, CoffeeImage } from "./styles";

import { ShoppingCartSimple, Minus, Plus, Trash } from "phosphor-react"
import { useContext, useState } from "react";
import { CoffeesContexts } from "../../../../contexts/coffeesContexts";

interface CoffeeProps {
    id: number;
    name: string;
    characteristics: string[];
    description: string;
    price: number;
    image?: string;
    quantity: number;
}

export function CheckoutCoffeeCard({ id, name, characteristics, description, price, image, quantity } : CoffeeProps) {

    const { handleDecrease, handleIncrease, handleDelete } = useContext(CoffeesContexts)

    return (
        <CardContainer>
            <div>
                <CoffeeImage src={image} alt="" />
            </div>

            <div>
                <CoffeeTitle>
                    {name}
                </CoffeeTitle>

                <CoffeeActions>

                    <CoffeeCounter>
                        <div>
                            <button onClick={() => handleDecrease(id)} >
                                <Minus size={14} color="var(--purple)" />
                            </button>
                            <span>
                                {quantity}
                            </span>
                            <button onClick={() => handleIncrease(id)} >
                                <Plus size={14} color="var(--purple)" />
                            </button>
                        </div>
                    </CoffeeCounter>

                    <CoffeeDelete onClick={() => handleDelete(id)} >
                        <Trash size={16} color="var(--purple)" />
                        <span>REMOVER</span>
                    </CoffeeDelete>

                </CoffeeActions>
            </div>

            <CoffeePrice>

                <div>
                    <div>{(price * quantity).toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
                    </div>
                </div>
            </CoffeePrice>

        </CardContainer>
    )
}