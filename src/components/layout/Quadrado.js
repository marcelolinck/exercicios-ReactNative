import React from 'react'
import { View } from 'react-native'


export default props =>{
    //Desa forma esta passando o tamanho do quadrado via props ou caso náo venha, ele terá o valor default de 50
    const lado = props.lado || 50
     return(
        <View style={{
            height: lado,
            width: lado,
            backgroundColor: props.cor || '#000'
        }}>
             
        </View>
     )
}
