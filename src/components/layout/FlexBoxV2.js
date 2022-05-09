import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV2}>
            <Quadrado cor='#ff801a' />
            <Quadrado cor='#50d1f6' />
            <Quadrado cor='#dd22c1' />
            <Quadrado cor='#8312ed' />
            <Quadrado cor='#36c9a7' />
        </View>
    )
}

const style = StyleSheet.create(
    {
        FlexV2:{
            flex:1,
            //Nesse momento iremos ajustar o eixo cruzado do componente com o alignItems
            width: '100%',
            alignItems: 'flex-end',
            //Como se organiza os elementos no eixo principal justifyContent
            justifyContent:'space-evenly',
            backgroundColor: '#000',
        }
    }
)