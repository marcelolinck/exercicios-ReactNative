import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import Estilo from './Estilo'

export default props => {
    const [nome, setNome] = useState('Teste')
    return (
        <View>
            <Text>{nome}</Text>
            <TextInput
                placeholder="Digite seu nome: "
                value={nome}
                //Para que um componente possa ser alterado em um ambiente controlado é necessário claro que usar o componente
                //useState, mas também usar o onChangeTExt para que o react altere o estado do componente com as informaçoes pertinentes
                onChangeText={nome=> setNome(nome)}
            />
        </View>
    )
}