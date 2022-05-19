import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Position = () => {
  return (
    <View style={styles.container}>
        <View style={styles.boxBlack}></View>
        <View style={styles.boxWhite}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  boxBlack: {
    backgroundColor: 'black',
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'gray',
    position: 'absolute',
    right: 0  
    
  },
  boxWhite: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'gray',
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30
  } 
})