import React from 'react'
import {Text, Button} from 'react-native'
import Estilo from '../Estilo'

export default props =>{

    
    function gerarNumero(min, max){
        const fator = max - min + 1
        return parseInt(Math.random() * fator)+ min
    }
    
    return(
        <Button 
        title='Executar' 
        onPress={function(){
            const n = gerarNumero(props.min, props.max)
            // Aqui está sendo carregada a função via props conforme indicado no arquivo Pai.js e passando o valor via props para ele carregar
            //no pai. Nesse caso o valor de n foi carregado no passo acima do gerar numero
            props.funcao(n, 'O valor é: ')
        }}
        
        />
    )
}