import React, { useContext } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { CartContext } from "../../contexts/CartContext";
import CardItem from "../../components/CardItem";


export default function Cart() {
  const { cart, AddItemCarinho, RemoveItemCard, total } = useContext(CartContext);

  return (
    <View style={styles.container}>
 
  {/* Listando produtos */}
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false} //remover barra de rolagem
        ListEmptyComponent={ () => <Text style={styles.container}>Carrinho Vazio</Text> } //Exibir após lista vazia
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => 
          
          // Componentes/CardItem 
          (
          <CardItem
            data={item}
            AddQuantidade={ () => AddItemCarinho(item)}
            //Chamar RemoveQuantidade na CardItem
            RemoveQuantidade={ () => RemoveItemCard(item)}
          />
        )}
        ListFooterComponent={ () => <Text style={styles.total}>Total R$ {total}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },

  total:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 24
  }


});