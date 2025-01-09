import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"; 

export default function Produtos({data}){
  return(
    <View style={styles.container}>

        <View>
      <Text style={styles.titulo}>{data.nome}</Text>
      <Text style={styles.valor}>R$ {data.valor}</Text>
      </View>

      <TouchableOpacity style={styles.btnAdd}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    borderWidth: 1,
    borderColor: '#DFDFDF',
    borderRadius: 5,
    marginBottom: 14,
    padding: 8,
    paddingBottom: 14,
    paddingTop: 14,
    flexDirection: 'row', //item tudo na mesma linha
    justifyContent: 'space-between', //item em cada lado
    alignItems: 'center'
  
  },

  titulo:{
    fontWeight: 'bold',
    fontSize: 17,
  },

  btnAdd:{
    paddingStart: 12,
    paddingEnd:12,
    backgroundColor: '#168FFF',
    paddingTop: 6,
    paddingBottom: 6,
  }




});