import { HeaderContainer, Location, Logo, ShoppingCartButton, CoffeeCount } from "./styles";

import { MapPin, ShoppingCart  } from "phosphor-react"

import logo from "../../assets/logo.svg"
import { useContext } from "react";
import { CoffeesContexts } from "../../contexts/coffeesContexts";

export function Header() {

    const { coffeeCount } = useContext(CoffeesContexts)

    return (
        <HeaderContainer>

            <Logo href="/" >
                <img src={logo} />
            </Logo>

            <nav>
                <Location>
                    <MapPin size={22} fill="var(--purple)" weight="fill" />
                    Santos, SP
                </Location>

                <ShoppingCartButton href="/checkout" >
                    <ShoppingCart size={22} weight="fill" fill="var(--yellow-dark)" />
                    {coffeeCount > 0 ?
                        <CoffeeCount>
                        {coffeeCount}
                    </CoffeeCount> : null }
                </ShoppingCartButton>
            </nav>

        </HeaderContainer>
    )
}