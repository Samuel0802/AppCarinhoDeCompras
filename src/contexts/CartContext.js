import React, { useState, createContext } from "react";
import Produtos from "../components/Produtos";

export const CartContext = createContext({});// Context recebendo um valor vazio

function CartProvider({ children }){//repassar os componentes que tiver dentro dele

const [cart, setCart] = useState([]); //carinho vai receber um valor vazio

//Função para adicionar algo no carrinho de compra +
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

//função de remover algo do carrinho
function RemoveItemCard(Produto){
 const indexItem = cart.findIndex( item => item.id === Produto.id); //findIndex: Verifica se existe na lista

 if(cart[indexItem]?.quantidade > 1){
   let cartList = cart; //pegando toda lista
  // pegando a quantidade total - quantidade do produto
   cartList[indexItem].quantidade = cartList[indexItem].quantidade - 1;
   // Pegando o valor total  - preço do produto
   cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].valor;

   setCart(cartList);
   return;
 }

  //filter: Retornar todos os item da lista menos o que clicou
 const removerProduto = cart.filter(item => item.id !== Produto.id);
 setCart(removerProduto);
}

return(
   //contexts: ele que tem funcionalidade de adicionar algo no carrinho, remover, listagem dos carrinhos

    //Provider: Compartilha o valor do contexto para todos os componentes filhos.
 <CartContext.Provider
  value={{ cart, AddItemCarinho, RemoveItemCard }} //Propriedade que vou exportar
 >

    {children}

 </CartContext.Provider>
);

}

export default CartProvider; //para ser exportado na App.js
