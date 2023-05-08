import { ReactNode, createContext, useEffect, useState } from "react";

import traditional from "../assets/coffeeType/traditional.png"
import americanExpress from "../assets/coffeeType/americanExpress.png"
import creamyExpress from "../assets/coffeeType/creamyExpress.png"
import icedExpress from "../assets/coffeeType/icedExpress.png"
import coffeWithMilk from "../assets/coffeeType/coffeeWithMilk.png"
import latte from "../assets/coffeeType/latte.png"
import capuccino from "../assets/coffeeType/capuccino.png"
import macchiato from "../assets/coffeeType/macchiato.png"
import mochaccino from "../assets/coffeeType/mochaccino.png"
import hotChocolate from "../assets/coffeeType/hotChocolate.png"
import cuban from "../assets/coffeeType/cuban.png"
import hawaiian from "../assets/coffeeType/hawaiian.png"
import arabic from "../assets/coffeeType/arabic.png"
import irish from "../assets/coffeeType/irish.png"

import axios from "axios";

interface Coffee {
    id: number;
    name: string;
    characteristics: string[];
    description: string;
    price: number;
    image: string;
    quantity: number;
}

interface CoffeesContextType {
    coffees: Coffee[];
    addToCart: ( id : number, coffeeQuantity : number ) => void;
    coffeeCount: number;
    handleIncrease: ( id : number ) => void;
    handleDecrease: ( id : number ) => void;
    handleDelete: ( id : number ) => void;
    handlePaymentMethod: ( method : string) => void;
    paymentMethod: string | undefined;
    selectedCoffees: Coffee[];
    address: AddressProps | undefined;
    setCep: ( cep : string ) => void;
    cep: string;
}

interface AddressProps {
    cep: string;
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
}

export const CoffeesContexts = createContext({} as CoffeesContextType)

interface CoffeesContextProviderProps {
    children: ReactNode;
}

export function CoffeesContextProvider({ children } : CoffeesContextProviderProps) {

    const [coffees, setCoffees] = useState<Coffee[]>([
        {
            id: 1,
            name: "Expresso Tradicional",
            characteristics: [
                "TRADICIONAL",
            ],
            description: "O tradicional café feito com água quente e grãos moídos",
            price: 9.90,
            image: traditional,
            quantity: 0,
        },
        {
            id: 2,
            name: "Expresso Americano",
            characteristics: [
                "TRADICIONAL",
            ],
            description: "Expresso diluído, menos intenso que o tradicional",
            price: 9.90,
            image: americanExpress,
            quantity: 0,
        },
        {
            id: 3,
            name: "Expresso Cremoso",
            characteristics: [
                "TRADICIONAL",
            ],
            description: "Café expresso tradicional com espuma cremosa",
            price: 9.90,
            image: creamyExpress,
            quantity: 0,
        },
        {
            id: 4,
            name: "Expresso Gelado",
            characteristics: [
                "TRADICIONAL",
                "GELADO"
            ],
            description: "Bebida preparada com café expresso e cubos de gelo",
            price: 9.90,
            image: icedExpress,
            quantity: 0,
        },
        {
            id: 5,
            name: "Café com Leite",
            characteristics: [
                "TRADICIONAL",
                "COM LEITE"
            ],
            description: "Meio a meio de expresso tradicional com leite vaporizado",
            price: 9.90,
            image: coffeWithMilk,
            quantity: 0,
        },
        {
            id: 6,
            name: "Latte",
            characteristics: [
                "TRADICIONAL",
                "COM LEITE"
            ],
            description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
            price: 9.90,
            image: latte,
            quantity: 0,
        },
        {
            id: 7,
            name: "Capuccino",
            characteristics: [
                "TRADICIONAL",
                "COM LEITE"
            ],
            description: "Bebida com canela feita de doses iguais de café, leite e espuma",
            price: 9.90,
            image: capuccino,
            quantity: 0,
        },
        {
            id: 8,
            name: "Macchiato",
            characteristics: [
                "TRADICIONAL",
                "COM LEITE"
            ],
            description: "Café expresso misturado com um pouco de leite quente e espuma",
            price: 9.90,
            image: macchiato,
            quantity: 0,
        },
        {
            id: 9,
            name: "Mocaccino",
            characteristics: [
                "TRADICIONAL",
                "COM LEITE"
            ],
            description: "Café expresso com calda de chocolate, pouco leite e espuma",
            price: 9.90,
            image: mochaccino,
            quantity: 0,
        },
        {
            id: 10,
            name: "Chocolate Quente",
            characteristics: [
                "ESPECIAL",
                "COM LEITE"
            ],
            description: "Bebida feita com chocolate dissolvido no leite quente e café",
            price: 9.90,
            image: hotChocolate,
            quantity: 0,
        },
        {
            id: 11,
            name: "Cubano",
            characteristics: [
                "ESPECIAL",
                "ALCOÓLICO",
                "GELADO"
            ],
            description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
            price: 9.90,
            image: cuban,
            quantity: 0,
        },
        {
            id: 12,
            name: "Havaiano",
            characteristics: [
                "ESPECIAL",
            ],
            description: "Bebida adocicada preparada com café e leite de coco",
            price: 9.90,
            image: hawaiian,
            quantity: 0,
        },
        {
            id: 13,
            name: "Árabe",
            characteristics: [
                "ESPECIAL",
            ],
            description: "Bebida preparada com grãos de café árabe e especiarias",
            price: 9.90,
            image: arabic,
            quantity: 0,
        },
        {
            id: 14,
            name: "Irlandês",
            characteristics: [
                "ESPECIAL",
                "ALCOÓLICO"
            ],
            description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
            price: 9.90,
            image: irish,
            quantity: 0,
        },
    ])

    const coffeeCount = coffees.reduce(( sum, coffee) => {
        return sum + coffee.quantity
    }, 0)

    useEffect(() => {
        const storagedCoffees = localStorage.getItem("@selectedCoffees:1.0.0")

        if (storagedCoffees) {
            setCoffees(JSON.parse(storagedCoffees))
        }

    }, [])

    useEffect(() => {
        const storagedAddress = localStorage.getItem("@address:1.0.0")

        if (storagedAddress) {
            setAddress(JSON.parse(storagedAddress))
        }

    }, [])

    useEffect(() => {
        const storagedPaymentMethod = localStorage.getItem("@paymentMethod:1.0.0")

        if (storagedPaymentMethod) {
            setPaymentMethod(JSON.parse(storagedPaymentMethod))
        }

    }, [])

    function addToCart( id : number, coffeeQuantity : number ) {
               
        const index = coffees.findIndex(coffee => coffee.id === id)
        
        const newCoffees = [...coffees]
        
        newCoffees[index].quantity = newCoffees[index].quantity + coffeeQuantity
        
        setCoffees(newCoffees)
        
        const stateJSON = JSON.stringify(coffees)
        localStorage.setItem("@selectedCoffees:1.0.0", stateJSON)
    }

    function handleDecrease( id : number ) {
        const index = coffees.findIndex(coffee => coffee.id === id)
        
        const newCoffees = [...coffees]
        
        newCoffees[index].quantity = newCoffees[index].quantity - 1
        
        setCoffees(newCoffees)

        const stateJSON = JSON.stringify(coffees)
        localStorage.setItem("@selectedCoffees:1.0.0", stateJSON)
    }

    function handleIncrease( id : number ) {
        const index = coffees.findIndex(coffee => coffee.id === id)
        
        const newCoffees = [...coffees]
        
        newCoffees[index].quantity = newCoffees[index].quantity + 1
        
        setCoffees(newCoffees)

        const stateJSON = JSON.stringify(coffees)
        localStorage.setItem("@selectedCoffees:1.0.0", stateJSON)
    }

    function handleDelete( id : number ) {
        const index = coffees.findIndex(coffee => coffee.id === id)
        
        const newCoffees = [...coffees]
        
        newCoffees[index].quantity = 0
        
        setCoffees(newCoffees)

        const stateJSON = JSON.stringify(coffees)
        localStorage.setItem("@selectedCoffees:1.0.0", stateJSON)
    }

    const [paymentMethod, setPaymentMethod] = useState<string>()

    function handlePaymentMethod( method : string) {
        setPaymentMethod(method)
    }

    const selectedCoffees = coffees.filter((selectedCoffees) => selectedCoffees.quantity > 0)

    const [cep, setCep] = useState('')
    const [address, setAddress] = useState<AddressProps>()
    
    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            setAddress(response.data)

            const stateJSON = JSON.stringify(response.data)
            localStorage.setItem("@address:1.0.0", stateJSON)

        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        if (cep.length === 9) {
            handleSearch()
        }
    }, [cep])

    return (
        <CoffeesContexts.Provider value={{ coffees, addToCart, coffeeCount, handleDecrease, handleIncrease, handleDelete, paymentMethod, handlePaymentMethod, selectedCoffees, address, setCep, cep }} >
            {children}
        </CoffeesContexts.Provider>
    )
}