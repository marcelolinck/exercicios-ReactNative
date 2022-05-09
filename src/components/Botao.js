import React from 'react';
import { Button } from 'react-native';

export default props => {

    function executar() {
        console.warn('Exec #01!!!!');
    }

    return (
        <>
            {/* Dessa forma se solicita via onPress a funcao criada acima */}
            <Button
                title="Exercicio #01"
                onPress={executar}
            />
            {/* Dessa forma se chama a função de forma a monta-la dentro do botao*/}
            <Button
                title="Exercicio #02"

                onPress={
                    function () {
                        console.warn('EXEC #02');
                    }
                }
            />

{/* Dessa forma abaixo irá executar a via arrow Function */}
            <Button
                title="Exercicio #03"
                onPress={()=>
                        console.warn('EXEC #03')}
                    
                
            />
        </>
    )
}