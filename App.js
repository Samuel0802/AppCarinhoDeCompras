import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import CartProvider from "./src/contexts/CartContext";



export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
      <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content" />
      <Routes />
      </CartProvider>
    </NavigationContainer>

    // O CartProvider: garante que todos os componentes no app possam acessar e modificar o carrinho,

  );
}
