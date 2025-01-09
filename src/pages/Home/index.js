import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from 'react-native-vector-icons/Feather';

export default function Home() {
  const [produto, setProduto] = useState([
    {
      id: '1',
      nome: "Coca cola",
      valor: 6.00
    },

    {
      id: '2',
      nome: "chocolate",
      valor: 12.00
    },

    {
      id: '3',
      nome: "Sabão em Pó",
      valor: 8.00
    },

    {
      id: '4',
      nome: "Queijo 500g",
      valor: 16.00
    },

    {
      id: '5',
      nome: "Batata Frita",
      valor: 25.00
    },

    {
      id: '6',
      nome: "Biscoito Recheado",
      valor: 10.00
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartContent}>
        <Text style={styles.title}>Lista de Produtos</Text>

        <TouchableOpacity style={styles.cartButton}>
          <View style={styles.dot}>
            <Text style={styles.dotText}>4</Text>
          </View>
          <Feather name="shopping-cart" size={30} color="#000" />
        </TouchableOpacity>

      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
   paddingRight: 10,
   paddingLeft: 14,
  },

  cartContent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24
  },
  
  title:{
    fontSize: 24,
    fontWeight: 'bold',
  },

  dot:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 12,
    position: 'absolute',
    zIndex: 99, //Sobre o carrinho
    bottom: -2,
    left: -4
  },

  dotText:{
    fontSize: 12,
    color: '#fff'
  }


});