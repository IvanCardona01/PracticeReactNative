import React from 'react'
import { Text, TouchableNativeFeedback, View, StyleSheet, Platform, TouchableOpacity } from 'react-native';


interface Props{
    title: string
    position: 'left' | 'right'
    onPress: () => void
}

export const FloatingActionButton = ({title, onPress, position = 'right'}: Props) => {
    const ios = () => {
        return (
            <TouchableOpacity activeOpacity={0.75} style={[ styles.fabPositionButton, (position == 'left')? styles.left: styles.rigth ]} 
                              onPress={ onPress }>
                <View style={ styles.fab }>
                    <Text style={ styles.fabText }>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View style={[ styles.fabPositionButton, (position == 'left')? styles.left: styles.rigth ]}>
                <TouchableNativeFeedback onPress={ onPress } background={ TouchableNativeFeedback.Ripple( 'white', false, 35)}>
                    <View style={ styles.fab }>
                        <Text style={ styles.fabText }>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
  return (Platform.OS == 'ios')? ios() : android()
      
}

const styles = StyleSheet.create({
    fabPositionButton: {
        position: 'absolute',
        bottom: 15
    },
    rigth:{
        right: 10
    },
    left: {
        left: 10
    },
    fab: {
        backgroundColor: '#0055ff',
        borderRadius: 10,
        fontWeight: 'bold',
        width: 60,
        height: 50,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    fabText: { 
        color: 'white', 
        fontSize: 20,
        alignSelf: 'center'
    }
})
