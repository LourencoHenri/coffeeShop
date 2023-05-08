import { CardContainer, CoffeeImage, ShoppingCartButton, CoffeeTitle, CoffeeDescription, CoffeePrice, CoffeeCharacteristics, Price, Actions, Amount, CoffeeCharacteristic } from "./styles";

import { ShoppingCartSimple, Minus, Plus } from "phosphor-react"
import { useContext, useState } from "react";
import { CoffeesContexts } from "../../../../contexts/coffeesContexts";

interface CoffeeProps {
    id: number;
    name: string;
    characteristics: string[];
    description: string;
    price: number;
    image?: string;
}

export function CoffeeCard({ id, name, characteristics, description, price, image } : CoffeeProps ) {

    const { addToCart } = useContext(CoffeesContexts)

    const [coffeeQuantity, setCoffeeQuantity] = useState(0)

    function handleIncrease() {
        coffeeQuantity < 9 ? setCoffeeQuantity(coffeeQuantity + 1) : 0
    }

    function handleDecrease() {
        coffeeQuantity > 0 ? setCoffeeQuantity(coffeeQuantity - 1) : 0
    }

    return (
        <CardContainer>
            <div>
                <CoffeeImage src={image} alt="" />
            </div>

            <CoffeeCharacteristics>
                {characteristics.map(characteristic => {
                    return (
                        <CoffeeCharacteristic key={id} >
                            {characteristic}
                        </CoffeeCharacteristic>
                    )
                })}
            </CoffeeCharacteristics>

            <CoffeeTitle>
                {name}
            </CoffeeTitle>

            <CoffeeDescription>
                {description}
            </CoffeeDescription>

            <CoffeePrice>

                <Price>
                    <div>R$ <span>{price.toLocaleString("pt-BR", {style:"decimal", minimumFractionDigits:2 })}</span>
                    </div>
                </Price>

                <Actions>
                    <Amount>
                        <div>
                            <button onClick={handleDecrease}>
                                <Minus size={14} color="var(--purple-dark)" weight="bold" />
                            </button>
                            <span>{coffeeQuantity}</span>
                            <button onClick={handleIncrease} >
                                <Plus size={14} color="var(--purple-dark)" weight="bold" />
                            </button>
                        </div>
                    </Amount>

                    <ShoppingCartButton onClick={() => addToCart(id, coffeeQuantity)} >
                        <ShoppingCartSimple size={22} weight="fill" fill="var(--base-card)" />
                    </ShoppingCartButton>
                </Actions>


            </CoffeePrice>
        </CardContainer>
    )
}