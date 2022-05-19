import React from "react";
import { Text, View, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';

export const BoxObjectModel = () => {

    const { width, height} = useWindowDimensions();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello World</Text>
            <Text style={{ fontSize: 20, textAlign: 'center'}}>W: {width} & H: {height}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: 'red',
       height: '100%'
       
    },
    title: {
        fontSize: 20,
        borderWidth: 5,
        color: 'black',
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold',
        backgroundColor: 'white',
        marginHorizontal: '30%',
    }
})