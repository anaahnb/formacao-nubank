import Expresso from "../assets/CoffeesCard/Expresso.svg"
import ExpressoCremoso from "../assets/CoffeesCard/ExpressoCremoso.svg"
import ExpressoGelado from "../assets/CoffeesCard/CafeGelado.svg"
import ComLeite from "../assets/CoffeesCard/CafeLeite.svg"
import Latte from "../assets/CoffeesCard/Latte.svg"
import Capucho from "../assets/CoffeesCard/Capuccino.svg"
import Mocchi from "../assets/CoffeesCard/Macchiato.svg"
import Cubano from "../assets/CoffeesCard/Cubano.svg"
import Havaiano from "../assets/CoffeesCard/Havaiano.svg"

export const coffees = [
  {
    qntd: [],
    id: "1",
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    image: Expresso,
    tags: ["Tradicional"],
    price: 9,
  },
  {
    id: "2",
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    image: ExpressoCremoso,
    tags: ["Tradicional"],
    price: 9,
    qntd: [],
  },
  {
    id: "3",
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    image: ExpressoGelado,
    tags: [["Tradicional"], "Gelado"],
    price: 9,
    qntd: [],
  },
  {
    id: "4",
    title: "Palmeira",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    image: Cubano,
    tags: ["Especial", "Alcoólico", "Gelado"],
    price: 9,
    qntd: [],
  },
  {
    id: "5",
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    image: ComLeite,
    tags: ["Tradicional", "Com Leite"],
    price: 9,
    qntd: [],
  },
  {
    id: "6",
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    image: Latte,
    tags: ["Tradicional", "Com Leite"],
    price: 9,
    qntd: [],
  },
  {
    id: "7",
    title: "Café do Cais",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    image: Capucho,
    tags: ["Tradicional", "Com Leite"],
    price: 9,
    qntd: [],
  },
  {
    id: "8",
    title: "Mocchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    image: Mocchi,
    tags: ["Tradicional", "Com Leite"],
    price: 9,
    qntd: [],
  },
  {
    id: "9",
    title: "Reviver",
    description: "Bebida adocicada preparada com café e leite de coco",
    image: Havaiano,
    tags: ["Especial"],
    price: 9,
    qntd: [],
  },
]
