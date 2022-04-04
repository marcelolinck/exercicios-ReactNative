import React from 'react';
import { Text } from 'react-native';
import estilo from './estilo';

export default props => {
    const delta = props.max - props.min + 1;
    const aleatorio = parseInt(Math.random() * delta) + props.min;
    return(
        <Text style={estilo.txtG}>
            O valor aleatorio é {aleatorio}
        </Text>
    )
}