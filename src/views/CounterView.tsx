import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FloatingActionButton } from '../components/FloatingActionButton'


export const CounterView = () => {
    const [conter, setConter] = useState(0)

    const count = (value: number) => {
        setConter(conter + value)
    }
  return (
      
    <View style={ styles.principalContainer }>
          <Text style={ styles.textCount }>Counter: {conter}</Text>
         
          <FloatingActionButton title='-1' onPress={ () => count(-1)  } position='left'/>

          <FloatingActionButton title='+1' position='right' onPress={ () => count(1) }/>
      </View>
  )
}

const styles = StyleSheet.create({
    principalContainer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    textCount: {
        color: 'black',
        fontSize: 50,
        textAlign: 'center',
        top: -100
    }
})
