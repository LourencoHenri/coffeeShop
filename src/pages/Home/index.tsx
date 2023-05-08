import { CoffeeItem, HomeContainer, HomeItems, HomeTitle, PackageItem, ShoppingCartItem, TimerItem, Intro, CoffeeList, List, BlurBackground } from "./styles";

import coffeeImage from "../../assets/coffeeImage.png"
import background from "../../assets/background.svg"

import { ShoppingCart, Timer, Package, Coffee  } from "phosphor-react"
import { CoffeeCard } from "./components/Card";
import { useContext } from "react";
import { CoffeesContexts } from "../../contexts/coffeesContexts";

export function Home() {

    const { coffees } = useContext(CoffeesContexts)

    return (
        <HomeContainer>
                <BlurBackground src={background} alt="" />           
                <Intro>
                
                    <div>
                        <HomeTitle>
                            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                            <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
                        </HomeTitle>
                        <HomeItems>
                            <ShoppingCartItem>
                                <div>
                                    <ShoppingCart size={16} fill="var(--background)" weight="fill" />
                                </div>
                                Compra simples e segura
                            </ShoppingCartItem>
                            <PackageItem>
                                <div>
                                    <Package size={16} fill="var(--background)" weight="fill" />
                                </div>
                                Embalagem mantém o café intacto
                            </PackageItem>
                            <TimerItem>
                                <div>
                                    <Timer size={16} fill="var(--background)" weight="fill" />
                                </div>
                                Entrega rápida e rastreada
                            </TimerItem>
                            <CoffeeItem>
                                <div>
                                    <Coffee size={16} fill="var(--background)" weight="fill" />
                                </div>
                                O café chega fresquinho até você
                            </CoffeeItem>
                        </HomeItems>
                    </div>
                    <img src={coffeeImage} alt="" />
                </Intro> 

            <CoffeeList>
                
                <h2>Nossos cafés</h2>

                <List>

                    {coffees.map((coffee) => {
                        return (
                            <CoffeeCard
                                key={coffee.id}
                                id={coffee.id}
                                name={coffee.name}
                                characteristics={coffee.characteristics}
                                description={coffee.description}
                                price={coffee.price}
                                image={coffee.image}
                            />
                        )
                    })}

                </List>
            </CoffeeList>
        </HomeContainer>
    )
}