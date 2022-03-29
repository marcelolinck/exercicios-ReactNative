import React from 'react';
import { Text, SafeAreaView } from 'react-native';

import CompPadrao, { Comp1, Comp2} from './components/Multi';
import Primeiro from './components/Primeiro'

// function App(){
//     return <Text>Primeiro Componente</Text>
// }
// -----------------------
//Componente montado em cima e uma constante
// const App = function(){
//     return <Text>Componente montado por constante</Text>
// }

// export default App
// -----------------------
// export default () =>{
//     return <Text>Componente montado com arrow function</Text>
// }

export default () => (
                    <SafeAreaView>
                        <Text>{ 1 + 1}</Text>
                        <CompPadrao></CompPadrao>
                        <Comp1 /> 
                        <Comp2 />
                        <Primeiro />
                     </SafeAreaView>
)