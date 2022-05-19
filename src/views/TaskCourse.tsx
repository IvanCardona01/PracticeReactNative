import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const TaskCourse = () => {
    const level = 1  //1...10
  return (
    getLevelFinished(level)   
  )
}

const getLevelFinished = (level: number) => {
    switch (level) {
        case 1:
            return (
                <View style={ stylesForLevel1.container }>
                    <Text style={stylesForLevel1.boxPurple}></Text>
                    <Text style={stylesForLevel1.boxOrange}></Text>
                    <Text style={stylesForLevel1.boxBlue}></Text>
                </View>
            )
            break;
        case 2:
            return(
                <View style={ stylesForLevel2.container }>
                    <Text style={stylesForLevel2.boxPurple}></Text>
                    <Text style={stylesForLevel2.boxOrange}></Text>
                    <Text style={stylesForLevel2.boxBlue}></Text>
                </View>
            )
            break;
        case 3:
            return(
                <View style={ stylesForLevel3.container }>
                    <Text style={stylesForLevel3.boxPurple}></Text>
                    <Text style={stylesForLevel3.boxOrange}></Text>
                    <Text style={stylesForLevel3.boxBlue}></Text>
                </View>
            )
            break;
        case 4:
            return(
                <View style={ stylesForLevel4.container }>
                    <Text style={stylesForLevel4.boxPurple}></Text>
                    <Text style={stylesForLevel4.boxOrange}></Text>
                    <Text style={stylesForLevel4.boxBlue}></Text>
                </View>
            )
            break;
        case 5:
            return(
                <View style={ stylesForLevel5.container }>
                    <Text style={stylesForLevel5.boxPurple}></Text>
                    <Text style={stylesForLevel5.boxOrange}></Text>
                    <Text style={stylesForLevel5.boxBlue}></Text>
                </View>
            )
            break;
        case 6:
            return(
                <View style={ stylesForLevel6.container }>
                    <Text style={stylesForLevel6.boxPurple}></Text>
                    <Text style={stylesForLevel6.boxOrange}></Text>
                    <Text style={stylesForLevel6.boxBlue}></Text>
                </View>
            )
            break;
        case 7:
            return(
                <View style={ stylesForLevel7.container }>
                    <Text style={stylesForLevel7.boxPurple}></Text>
                    <Text style={stylesForLevel7.boxOrange}></Text>
                    <Text style={stylesForLevel7.boxBlue}></Text>
                </View>
            )
            break;
        case 8:
            return(
                <View style={ stylesForLevel8.container }>
                    <Text style={stylesForLevel8.boxPurple}></Text>
                    <Text style={stylesForLevel8.boxOrange}></Text>
                    <Text style={stylesForLevel8.boxBlue}></Text>
                </View>
            )
            break;
        case 9:
            return(
                <View style={ stylesForLevel9.container }>
                    <Text style={stylesForLevel9.boxPurple}></Text>
                    <Text style={stylesForLevel9.boxOrange}></Text>
                    <Text style={stylesForLevel9.boxBlue}></Text>
                </View>
            )
            break;
        case 10:
            return(
                <View style={ stylesForLevel10.container }>
                    <Text style={stylesForLevel10.boxPurple}></Text>
                    <Text style={stylesForLevel10.boxOrange}></Text>
                    <Text style={stylesForLevel10.boxBlue}></Text>
                </View>
            )
            break;
    }
}

/////////////////////////////////////////////LEVEL 1//////////////////////////////////////////////////

const stylesForLevel1 = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#293454',
        justifyContent: 'center'
    },
    boxPurple: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#6f00d6'
    },
    boxOrange: {
        width: 100,
        height: 520,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#ef9f00'
    },
    boxBlue: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#29b9d6',
    }
})

/////////////////////////////////////////////LEVEL 2//////////////////////////////////////////////////

const stylesForLevel2 = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#293454',
        justifyContent: 'center'
    },
    boxPurple: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#6f00d6'
    },
    boxOrange: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#ef9f00'
    },
    boxBlue: {
        width: '100%',
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#29b9d6',
    }
})

/////////////////////////////////////////////LEVEL 3//////////////////////////////////////////////////

const stylesForLevel3 = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#293454',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxPurple: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#6f00d6',
        marginLeft: 300
    },
    boxOrange: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#ef9f00',
        marginRight: 300
    },
    boxBlue: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#29b9d6',
    }
})

/////////////////////////////////////////////LEVEL 4//////////////////////////////////////////////////

const stylesForLevel4 = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#293454',
        justifyContent: 'space-between'
    },
    boxPurple: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#6f00d6',
        alignSelf: 'flex-end'
    },
    boxOrange: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#ef9f00',
        alignSelf: 'center',
        
    },
    boxBlue: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#29b9d6',
    }
})

/////////////////////////////////////////////LEVEL 5//////////////////////////////////////////////////

const stylesForLevel5 = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#293454',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    boxPurple: {
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#6f00d6'
    },
    boxOrange: {
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#ef9f00'
    },
    boxBlue: {
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#29b9d6',
    }
})

/////////////////////////////////////////////LEVEL 6//////////////////////////////////////////////////

const stylesForLevel6 = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#293454',
    },
    boxPurple: {
        flex: 2,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#6f00d6'
    },
    boxOrange: {
        flex: 2,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#ef9f00'
    },
    boxBlue: {
        flex: 4,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#29b9d6',
    }
})

/////////////////////////////////////////////LEVEL 7//////////////////////////////////////////////////

const stylesForLevel7 = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#293454',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxPurple: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#6f00d6'
    },
    boxOrange: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#ef9f00'
    },
    boxBlue: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#29b9d6',
    }
})

/////////////////////////////////////////////LEVEL 8//////////////////////////////////////////////////

const stylesForLevel8 = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#293454',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxPurple: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#6f00d6',
    },
    boxOrange: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#ef9f00',
        marginLeft: 200
    },
    boxBlue: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#29b9d6',
    }
})

/////////////////////////////////////////////LEVEL 9//////////////////////////////////////////////////

const stylesForLevel9 = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#293454',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxPurple: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#6f00d6',
        bottom: -100

    },
    boxOrange: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#ef9f00',
        left: 100

    },
    boxBlue: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#29b9d6',
        bottom: 0
    }
})

/////////////////////////////////////////////LEVEL 10//////////////////////////////////////////////////

const stylesForLevel10 = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#293454',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxPurple: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#6f00d6'
    },
    boxOrange: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#ef9f00',
        bottom: -50
    },
    boxBlue: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#29b9d6',
    }
})