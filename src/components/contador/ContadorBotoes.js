import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import Estilo from '../Estilo'

export default props => {
    return (
        <View style={style.Botoes}>
            <Button title="+" onPress={props.inc}/>
            <Button title="-" onPress={props.dec}/>
        </View>
    )
}

const style = StyleSheet.create({
    Botoes:{
        flexDirection: 'row',
    },
    
})