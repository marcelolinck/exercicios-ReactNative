import React from 'react'
import { Text } from 'react-native'

export default props =>{
     return(
         <>  
            <Text>[INICIO] Membros da familia: </Text>

            {/* Com a props.children se consegue montar o componente filho a partir do app.js 
            sem necessitar de importar o component acima */}
            {props.children}
            <Text>[FIM] Membros da familia: </Text>
        </>
     )
}