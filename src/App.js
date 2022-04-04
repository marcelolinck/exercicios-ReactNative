import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'


export default () => (
    <SafeAreaView style={style.App}>
        {/* Se passar com par de chaves, ira dizer que é numerico
        <MinMax min={3} max={20} />
        
        {/* Se passar com par de aspas, ira dizer que é string */}
        {/* <MinMax min="2" max="94" /> */}
        
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        
        {/* <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        
    },

})