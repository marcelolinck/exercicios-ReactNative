import React from 'react';
import { View, Text} from 'react-native';
import estilo from './estilo';


export default props => {
    return(
        <>
    {/* Utilizando o fragment para envolver dois elementos com o fragment:
            dessa forma <> </> ou <Fragment> </Fragment>
            Se usar a segunda opcao é necessario importar a tag
            import {Fragment} from 'react-native';
    */}
            <Text style={estilo.txtG}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </>
    )
}