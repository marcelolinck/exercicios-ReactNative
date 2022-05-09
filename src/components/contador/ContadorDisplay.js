import React from 'react'
import {View, Text, StyleSheet } from 'react-native'
import Estilo from '../Estilo'

export default props =>{
     return(
         <View style={style.Display}>
             {/* Colocando os estilos entre colchetes, podemos inserir mais de um estilo em um COMPONENTE */}
            <Text style={[Estilo.txtG, style.DisplayText]}>
                {props.num}
            </Text>
        </View>
     )
}
const style = StyleSheet.create({
    Display:{
        backgroundColor: '#000',
        padding: 20,
        width: 300,
    },
    DisplayText:{
        color: '#fff',
    }

})