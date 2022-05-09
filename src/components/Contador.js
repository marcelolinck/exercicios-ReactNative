import React,{useState} from 'react'
import {Text, Button} from 'react-native'
import Estilo from './Estilo'

//export default props =>{
//Dessa forma, estamos colocando o valor default para caso nao tenha sido passado os valores via props, ele receberá um valor default
export default ({inicial = 0, passo = 1}) =>{
    //Dessa forma utilizamos o metodo SET para passar o novo valor para a variavel numero, assim a variavel não é alterada de forma direta
    //protegendo o valor inicial da variavel.

    const[numero, setNumero] = useState(inicial)
    
    const inc=() => setNumero(numero + passo)
    const dec=() => setNumero(numero - passo)
    
    return(
        <>
            <Text style={Estilo.txtG}>{numero}</Text>
            <Button title='+' onPress={inc}></Button>
            <Button title='-' onPress={dec}></Button>
        </>
    )
}