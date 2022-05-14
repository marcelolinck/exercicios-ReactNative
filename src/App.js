import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Mega from './components/mega/Mega'


export default () =>
(
    <SafeAreaView style={style.App}>
        <Mega qtdeNumeros={7} />
    </SafeAreaView>
)
// props.map() transforma um array em outro array com atributos modificado

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,

    },

})