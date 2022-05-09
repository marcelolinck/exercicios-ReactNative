import React from 'react'
import {Text} from 'react-native'
import Estilo from '../Estilo'

export default props =>{
    return(
        // Nesse caso utilizado o <> Fragmento para passar mais de um parametro dentro do compomente
        <>
            <Text style={Estilo.txtG}>{props.a}</Text>
            <Text style={Estilo.txtG}>{props.b}</Text>
        </>
    )
}