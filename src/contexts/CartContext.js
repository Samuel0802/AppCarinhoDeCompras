import React, { useState, createContext } from "react";

export const CartContext = createContext({});// Context recebendo um valor vazio

function CartProvider({ children }){//repassar os componentes que tiver dentro dele
const [cart, setCart] = useState([]); //carinho vai receber um valor vazio

return(
    //Provider: Compartilha o valor do contexto para todos os componentes filhos.
 <CartContext.Provider
  value={{ cart }} //Propriedade que vou exportar
 >

    {children}

 </CartContext.Provider>
);

}

export default CartProvider; //para ser exportado na App.js
