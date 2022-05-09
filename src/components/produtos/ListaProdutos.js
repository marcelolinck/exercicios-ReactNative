import React from 'react'
import { Text } from 'react-native'
import Estilo from '../Estilo'
import produtos from './produtos'

export default props => {
    function obterLista() {
        //Passo 1 - Passamos a rendenização para dentro de uma função e depois carrega-la como obter lista conforme passo 2
        return produtos.map(p => {
            return (
                <Text key={p.id}>{p.id}) {p.nome} tem preço: R$ {p.preco}
                </Text>
            )
        })
    }
    return (

        <>
            <Text style={Estilo.txtG}>
                Lista de Produtos
            </Text>
            {/* Passo 2 - obtendo a lista de produtos via função */}
            {obterLista()}


            {/* 
                produtos.map( p=>{
                // Sempre será necessario colocar a key para vincular o registro a um ID
                //Nesse exemplo abaixo passamos de forma direta a funcao de criacao da lista, mas podemos colocar isso dentro de uma função e
                //rendenizar a partir dela
                return <Text key={p.id}>{p.id}) {p.nome} tem preço: R$ {p.preco}</Text>
                })
            }*/}
        </>
    )
}