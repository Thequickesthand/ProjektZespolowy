import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { Actions } from 'react-native-router-flux';

class Welcome extends Component {
    render() {
      return (
        <SafeAreaView style={{flex: 1}}>
            <LinearGradient colors={['dodgerblue', 'white']} style={styles.container}>
                <StatusBar translucent backgroundColor="transparent"/>

                <View style={styles.logoContainer}>
                <Image source={require('../assets/logoApk.png')} style={styles.logoIco}/>
                <Text style={styles.logoText}>Pożycz i zapomnij</Text>
                </View>

                
                <TouchableOpacity onPress={() => Actions.login()} style={styles.loginButton}>
                    <Text style={styles.buttonText}>Logowanie</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Actions.register()} style={styles.registerButton}>
                    <Text style={styles.buttonText}>Rejestracja</Text>
                </TouchableOpacity>
                

            </LinearGradient>
        </SafeAreaView>
      );
    }
  }

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
    logoContainer:{
        position: "absolute",
        top: 50,
        alignItems: 'center',
    },
    logoText: {
        fontSize: 30,
        color: 'white',
        textShadowColor : 'black',
        textShadowRadius: 5,
    },
    logoIco: {
        height: 200,
        width: 200,
    },
    registerButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 100,
        backgroundColor: "#96F550",
    },
    loginButton:{
        alignItems: 'center',
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignSelf: 'stretch',
        backgroundColor: "dodgerblue",   
    },
    buttonText: {
        fontSize: 40,
        color: 'black',
        textShadowColor : 'black',
        textShadowRadius: 10,
    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 100,
        backgroundColor: "dodgerblue",
    }
})