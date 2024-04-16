"use client";

import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { useQuery } from "react-query";
import { useState } from "react";
import apiProducts from "@/app/api/apiProducts";
import ShoppingCart from "@/app/components/ShoppingCart/ShoppingCart";
import { InterfaceApi } from "@/app/interface/interface";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  CardDescription,
  NameProduct,
  Price,
  Description,
  ErrorText,
} from "@/app/home/HomePageStyles";
import Footer from "@/app/components/Footer/Footer";
import { RiShoppingBag3Line } from "react-icons/ri";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function HomePage() {
  const [cartItems, setCartItems] = useState<InterfaceApi[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Função para adicionar itens ao carrinho
  const addToCart = (item: InterfaceApi) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id,
    );

    if (existingItemIndex !== -1) {
      const newCartItems = [...cartItems];
      newCartItems[existingItemIndex].quantity += 1;
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Função para remover um item do carrinho
  const removeFromCart = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  // Função para atualizar a quantidade de um item
  const updateQuantity = (index: number, newQuantity: number) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = newQuantity;
    setCartItems(newCartItems);
  };

  // Função para limpar todo o carrinho
  const clearCart = () => {
    setCartItems([]);
    // Fechar a janela do carrinho após limpar
    setIsCartOpen(false);
  };

  // Abrir ou fechar a janela do carrinho
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Use a função useQuery para buscar os produtos
  const {
    data: products,
    error,
    isLoading,
  } = useQuery("productsData", apiProducts, {
    onError: () => {
      setErrorMessage(
        "⚠️ Aconteceu um erro inesperado. Por favor, atualize a página e tente novamente.",
      );
    },
  });

  // Verifique se ocorreu algum erro
  if (error) return <ErrorText>{errorMessage}</ErrorText>;

  return (
    <div className={`montserrat.className container`} >
      <div className="conteiner_header">
        <div className="titleHeader">
        <i className="bi bi-cpu-fill h4"></i><h2>MKS</h2> 
        </div>

        {/* Componente carrinho de compras */}
        <ShoppingCart
          cartItems={cartItems}
          toggleCart={toggleCart}
          isCartOpen={isCartOpen}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          clearCart={clearCart}
        />
      </div>

      <div className='containerCard '>
        {isLoading
          ? // Renderizar o esqueleto enquanto os dados estão sendo carregados
            Array.from({ length: 8 }).map((_, id) => (
              <li key={id}>
                <Skeleton height={49} width={218} />
                <Skeleton height={49} width={218} />
                <Skeleton height={49} width={218} />
                <Skeleton height={49} width={218} />
                <Skeleton height={49} width={218} />
                <Skeleton height={49} width={218} />
                <Skeleton height={49} width={218} />
              </li>
            ))
          : // Renderize a lista de produtos
            products.map((product: InterfaceApi) => (
              <div className="card" key={product.id}>
                <div onClick={() => addToCart(product)} className="card-description ">
                  
                  <Image
                  className="images"
                    src={product.photo}
                    width={0}
                    height={0}
                    sizes="100%"
                    alt="Products"
                  />
                  <CardDescription className="cardDescription">
                    <NameProduct>{product.name}</NameProduct>
                    <Price>R${product.price}</Price>
                  </CardDescription>
                  <Description>{product.description}</Description>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
