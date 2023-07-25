import * as React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import styled from "styled-components"

import { CurrencyDollar, MapPinLine, ShoppingCart, Link } from "phosphor-react"

import { CoffeeCart } from "../components/TableCoffeePurchase"
import { useCart } from "../components/Context/CartContext"

export function Cart() {
  const schema = yup
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const Button = styled.button`
    background-color: #e6e5e5;
    /* color: white; */
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    text-transform: uppercase;
    margin: 10px 0px;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
      background-color: #ebe5f9;
    }
    &:disabled {
      cursor: default;
      opacity: 0.7;
    }
  `

  const ButtonToggle = styled(Button)`
    margin-left: 5px;
    opacity: 0.7;
    ${({ active }) =>
      active &&
      `
    opacity: 1;
    background: #EBE5F9;
  `}
  `

  const types = ["Crédito", "Débito", "Dinheiro"]

  function ButtonGroup() {
    const [active, setActive] = useState()
    return (
      <div>
        {types.map((type) => (
          <ButtonToggle
            active={active === type}
            onClick={() => setActive(type)}
            type="button"
            key={type}
          >
            {type}
          </ButtonToggle>
        ))}
      </div>
    )
  }

  const onSubmit = (data) => console.log(data)

  const cart = useCart()

  return (
    <div>
      <div className="ml-20">
        <div className="mt-20 flex gap-96">
          <h1 className="font-bold text-2xl">Café selecionados</h1>
        </div>
        <div>
          <form
            className="grid grid-rows-2 grid-flow-col w-20 h-[700px] "
            onSubmit={handleSubmit(onSubmit)}
          >
              <div>
                <div className="mt-5 mr-10 border w-[498px] p-10 bg-[#F3F2F2] container rounded-lg shadow-sm rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg ">
                {cart.size > 0 && <CoffeeCart title={"title"} />}
                {cart.size === 0 && (
                  <div>
                    <div className="flex justify-center">
                      <ShoppingCart size={80} />
                    </div>
                    <div className="text-center mt-2 text-xl -mb-5 grid items-center">
                      Carrinho vazio
                      <a
                        href="/"
                        className="text-white text-lg bg-yellow w-96 mt-10 center text-center h-10 rounded-lg hover:bg-yellow-dark "
                      >
                        Voltar Home
                      </a>
                    </div>
                    <div className="ml-3"></div>
                  </div>
                )}
                <div className="ml-3">
                  {cart.size > 0 && (
                    <button
                      type="submit"
                      className="text-white text-lg bg-yellow w-96 mt-10 center text-center h-10 rounded-lg hover:bg-yellow-dark "
                    >
                      Confirmar Pedido
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
          <div className="mt-5 ml-20 animate-pulse "></div>
        </div>
      </div>
    </div>
  )
}
