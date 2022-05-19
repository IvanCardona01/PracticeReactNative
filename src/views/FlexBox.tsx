import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

export const FlexBox = () => {
  return (
   <View style={styles.container}>
       <Text style={styles.box1}>Caja 1</Text>
       <Text style={styles.box2}>Caja 2</Text>
       <Text style={styles.box3}>Caja 3</Text>
   </View>
  )
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#39c1e0',
        
    },
    box1:{
        alignSelf: 'flex-end',
        borderWidth: 2,
        borderColor: 'white',
        color: 'black',
        fontSize: 30
    },
    box2:{
        borderWidth: 2,
        borderColor: 'white',
        color: 'black',
        fontSize: 30
    },
    box3:{
        borderWidth: 2,
        borderColor: 'white',
        color: 'black',
        fontSize: 30
    }
})
