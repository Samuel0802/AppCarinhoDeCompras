import React, { useState, createContext } from "react";
import Produtos from "../components/Produtos";

export const CartContext = createContext({});// Context recebendo um valor vazio

function CartProvider({ children }){//repassar os componentes que tiver dentro dele

const [cart, setCart] = useState([]); //carinho vai receber um valor vazio

function AddItemCarinho(NewItem){

  //Ver se esse item ja tem no carrinho e ai adicionamos +1 quantidade
  const indexItem = cart.findIndex( item => item.id === NewItem.id);

  if( indexItem !== -1){
   //Caso ele existar
   //se entrou aqui quer dizer que temos que adicionar +1 quantidade por que ele ja esta na sua lista
   let cartList = cart;
   
   cartList[indexItem].quantidade = cartList[indexItem].quantidade + 1;

   //quantidade x valor total
   cartList[indexItem].total = cartList[indexItem].quantidade * cartList[indexItem].valor;

   setCart(cartList);
   console.log(cartList);
   return;

  }


  let data = {
   ...NewItem, //Pegar toda propriedade NewItem
    quantidade: 1,
    total: NewItem.valor,
  }

  setCart(Produtos => [...Produtos, data])//Passar para useState que tem item do carrinho




}

return(
   //contexts: ele que tem funcionalidade de adicionar algo no carrinho, remover, listagem dos carrinhos

    //Provider: Compartilha o valor do contexto para todos os componentes filhos.
 <CartContext.Provider
  value={{ cart, AddItemCarinho }} //Propriedade que vou exportar
 >

    {children}

 </CartContext.Provider>
);

}

export default CartProvider; //para ser exportado na App.js
