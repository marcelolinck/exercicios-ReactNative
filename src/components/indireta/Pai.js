
//Foi necessario carregar o {useState} para usar o metodo SET
import React, { useState } from 'react'
import { Text } from 'react-native'
import Estilo from '../Estilo'
import Filho from './Filho'

export default props => {

    //É necessário carregar via useState para alterar o estado do componente via set. O primeiro campo do array é a variavel a ser alterada e 
    //o segundo parametro é o novo valor que irá receber
    
    // O valor ('') é o valor default que esta sendo mandado via props. nesse caso é vazio
    const [texto, setTexto] = useState('')
    // O valor (0) é o valor default que esta sendo mandado via props
    const [num, setNum] = useState(0)

    function exibirValor(numero, texto) {
        setNum(numero)
        setTexto(texto)
    }
    return (
        <>
            
            <Text style={Estilo.txtG}>
                {texto}{num}
            </Text>
            <Filho
                min={1}
                max={60}
                // carregando a funcao dessa forma passando por props, o proprio react passa ela para ser executado no componente filho, mas voltando
                //o resultado para o componente PAI, por isso a comunicação indireta
                funcao={exibirValor}
            />
        </>
    )
}