import React from 'react';
import { Text } from 'react-native';
import estilo from './estilo';

// Desta forma o parametro vem via props e podemos deixar o destructor protegido
export default ({ min, max }) => {
    const delta = max - min + 1;
    const aleatorio = parseInt(Math.random() * delta) + min;
    return(
        <Text style={estilo.txtG}>
            O valor aleatorio é {aleatorio}
        </Text>
    )
}