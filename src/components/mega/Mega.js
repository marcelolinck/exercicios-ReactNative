import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import Estilo from '../Estilo'
import MegaNumero from './MegaNumero'

export default class Mega extends Component {

    // Para trabalhar a passagem de parametros via class podemos executar de duas formas: via state e via constructor(mais burocrático)
    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }
    //Solucao com arrow function na funcao
    alterarQtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: +qtde })
    }

    gerarNumeroNaoContido = nums => {
        //Essa forma o parseInt faz com que crie um array e atribua o valor para dentro da variavel novo
        const novo = parseInt(Math.random() * 60) + 1
        //Com esse operador ternario, será testado se o valor está contido no array. Se estiver contido, rodará novamente a funcao, caso contrario vai atribuir o valor ao array nums
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }

    // gerarNumeros = () => {
    //     //dessa forma a constante qtdeNumeros esta recebendo o valor de this.state
    //     const {qtdeNumeros} = this.state
    //     //Está sendo criada a constante numeros como um array
    //     const numeros =[]
        
    //     for (let i = 0; i< qtdeNumeros; i++){

    //         //A cada posicao do array o push está inserindo o valor gerado dentro do array numeros[]
    //         numeros.push(this.gerarNumeroNaoContido(numeros))
    //     }
    //     //funcao sort efetua a ordenaçao do numeros para que fiquem ordenados do menos par ao maior
    //     numeros.sort((a,b) => a - b)
    //     return this.setState({numeros})
    // }


    //Sem arrowFunction solucao 2
    // alterarQtdeNumero(qtde){
    //     this.setState({qtdeNumeros: qtde})
    // }

    //via constructor - a props foi carregada via parenteses evidencida direto
    // constructor(props){
    //     //Com o super, faz com que suba ate a classe pai app.js e traga o valor de la
    //     super(props)
    //     //o this.ja foi instacioado aqui
    //     this.state = {
    //         //Dai náo preciso colocar o this na frente
    //         qtdeNumeros: props.qtdeNumeros
    //     }
    // }

    exibirNumeros = () => {
        const nums = this.state.numeros
        
        return nums.map(num => {
            // o numero dentro das chaves é o valor de num recebida pelo parametro acima
            return <MegaNumero key={num} num={num} />
            //O num do lado do MegaNumero é referente ao valor que está sendo injetado dentro do componente
        })
    }
    render() {
        return (
            <>
                <Text style={Estilo.txtG}>
                    {/* Lendo o parametro recebidas como propriedade dai se lê com o this sem carregar o props no inicio do componente
                    baseado em classe */}
                    {/* Exemplo via state */}
                    Gerador de Mega-Sena

                    {/* Exemplo via construtor */}
                    {/* Gerador de Mega-Sena {this.state.qtdeNumeros} */}
                </Text>

                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1, }}
                    placeholder="Qtde de Números"
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={this.alterarQtdeNumero}
                // Solucao 2 com a arrowFucntion direto no onChange - 
                //onChangeText={qtde => this.alterarQtdeNumero(qtde)}

                />
                <Button
                    title='Gerar'
                    onPress={this.gerarNumeros}
                    
                />
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap:'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}