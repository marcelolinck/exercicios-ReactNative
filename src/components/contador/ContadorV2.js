import React, { useState } from 'react'
import { Text } from 'react-native'
import Estilo from '../Estilo'
import ContadorBotoes from './ContadorBotoes'
import ContadorDisplay from './ContadorDisplay'

export default props => {
    const [num, setNum] = useState(0)

    const inc = () => setNum(num+1)
    const dec = () => setNum(num-1)

    return (
        <>
            <Text style={Estilo.txtG}>
                ContadorV2
            </Text>
            {/* Comunicacao direta do elemento com o elemento filho, no caso o ContadorDisplay*/}
            <ContadorDisplay num={num} />
            {/* Comunicacao indireta do elemento ContadorV2 com o ContadoBotoes mandando a funcao INC e DEC para serem executadas no
            componente botões*/}
            <ContadorBotoes inc={inc} dec={dec}/>
        </>
    )
}