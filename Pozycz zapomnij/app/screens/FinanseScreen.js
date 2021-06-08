import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { Actions } from 'react-native-router-flux';

class Finances extends Component {
    render() {
      return (
        <SafeAreaView style={{flex: 1}}>
            <LinearGradient colors={['white', '#B2AEAE']} style={styles.container}>
                <StatusBar translucent backgroundColor="transparent"/>
                <Text style={styles.middleText}>Wisze:</Text>
                <Text style={styles.moneyText}>500 zł</Text>
                <Text style={styles.middleText2}>Czekam na zwrot:</Text>
                <Text style={styles.moneyText2}>500 zł</Text>
                <View style={styles.textContainer} />
                <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Pożycz</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button2}>
                        <Text style={styles.buttonText}>Użycz</Text>
                </TouchableOpacity>

            </LinearGradient>
        </SafeAreaView>
      );
    }
  }
  
  export default Finances;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    middleText: {
        position: "absolute",
        top: "5%",
        left: "10%",
        fontSize: 21,
        color: 'black',
        fontWeight: 'bold',
        textShadowColor : 'black',
        alignItems: 'center',
    },
    moneyText: {
        position: "absolute",
        top: "13%",
        left: "10%",
        fontSize: 30,
        color: 'crimson',
        fontWeight: 'bold',
        textShadowColor : 'black',
        alignItems: 'center',
    },
    middleText2: {
        position: "absolute",
        top: "5%",
        right: "10%",
        fontSize: 21,
        color: 'black',
        fontWeight: 'bold',
        textShadowColor : 'black',
        alignItems: 'center',
    },
    moneyText2: {
        position: "absolute",
        top: "13%",
        right: "10%",
        fontSize: 30,
        color: '#00C689',
        fontWeight: 'bold',
        textShadowColor : 'black',
        alignItems: 'center',
    },
    textContainer: {
        position: "absolute",
        top: "23%",
        width: "90%",
        height: "60%",
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        position: "absolute",
        bottom: "5%",
        right: '53%',
        width: "45%",
        height: "8%",
        backgroundColor: "crimson",
        borderRadius:30,
        alignItems: 'center',
        justifyContent: "center",
    },
    button2: {
        position: "absolute",
        bottom: "5%",
        right: '3%',
        width: "45%",
        height: "8%",
        backgroundColor: "#00C689",
        borderRadius:30,
        alignItems: 'center',
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    }
})
