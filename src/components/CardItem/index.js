import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function CartItem({ data, AddQuantidade, RemoveQuantidade }) {
    const [quantidade, setQuantidade] = useState(data?.quantidade);

    //função para aumentar quantidade no carrinho
    function AumentarQuantidade(){
    AddQuantidade(); //Gravar na useState a quantidade do item
   setQuantidade( item => item + 1)
    }

    function DiminuirQuantidade(){
        RemoveQuantidade();

        if(quantidade === 0){
            setQuantidade(0)
            return;
        }
        setQuantidade( item => item - 1)
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.nome}>{data.nome}</Text>
                <Text style={styles.valor}> R$ {data.valor}</Text>
            </View>

            <View style={styles.quantidadeContainer}>
                <TouchableOpacity style={styles.btnAdd} onPress={DiminuirQuantidade}>
                    <Text style={styles.btnText}>-</Text>
                </TouchableOpacity>
                
                <Text style={styles.quantidade}>{quantidade}</Text>

                <TouchableOpacity style={styles.btnAdd} onPress={AumentarQuantidade}>
                    <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
    borderWidth: 1,
    borderColor: '#DFDFDF',
    borderRadius: 2,
    marginBottom: 14,
    padding: 8
    },

    nome:{
        fontWeight: 'bold',
        fontSize: 17,
    }, 

    valor:{
        fontSize:  16
    },

    quantidadeContainer:{
        marginTop: 14,
        marginBottom: 14,
        flexDirection: 'row',
        alignItems: 'center'
    },

    btnAdd:{
        backgroundColor: "#168FFF",
        padding: 6,
        paddingLeft: 14,
        paddingRight: 14,
        borderRadius: 2
    },

    quantidade:{
        marginLeft: 14,
        marginRight: 14
    }


});