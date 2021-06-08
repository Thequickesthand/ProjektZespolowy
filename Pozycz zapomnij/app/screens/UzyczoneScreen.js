import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import SearchBars from '../../components/SearchBars';

class Uzyczone extends Component {
    render() {
      return (
        <SafeAreaView style={{flex: 1}}>
            <SearchBars />
            <LinearGradient colors={['white', '#B2AEAE']} style={styles.container}>
                <StatusBar translucent backgroundColor="transparent"/>
                <Text style={styles.middleText}>Lista użyczonych przedmiotów:</Text>
                <View style={styles.textContainer} />

                <TouchableOpacity style={styles.button2}>
                        <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>

            </LinearGradient>
        </SafeAreaView>
      );
    }
  }

  const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    middleText: {
        position: "absolute",
        top: "2%",
        fontSize: 21,
        color: 'black',
        fontWeight: 'bold',
        textShadowColor : 'black',
        alignItems: 'center',
    },
    textContainer: {
        position: "absolute",
        top: "8%",
        width: "90%",
        height: "78%",
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button2: {
        position: "absolute",
        bottom: "2%",
        right: '5%',
        width: 75,
        height: 75,
        backgroundColor: "goldenrod",
        borderRadius:100,
        alignItems: 'center',
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    }
})

export default Uzyczone;