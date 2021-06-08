import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

class Profile extends Component {

    render() {
      return (
        <SafeAreaView style={{flex: 1}}>
            <LinearGradient colors={['white', '#B2AEAE']} style={styles.container}>
                <StatusBar translucent backgroundColor="transparent"/>

                <TouchableOpacity onPress={() => Actions.menu()} style={styles.menuIcon}>
                    <Image source={require('../assets/menu.png')} style={styles.Burger}/>
                </TouchableOpacity>

                <Text style={styles.nameText}>Adam Kowalski</Text>
                <Text style={styles.mailText}>adam.kowalski@gmail.com</Text>
                <Text style={styles.middleText}>Lista zbliżających się terminów:</Text>
                <View style={styles.textContainer} />
                
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
    menuIcon: {
        position: "absolute",
        top: '10%',
        right: '85%',
        height: 20,
        width: 20,
        alignItems: 'center',
    },
    nameText: {
        position: "absolute",
        top: "10%",
        right: "20%",
        fontSize: 27,
        color: 'black',
        fontWeight: 'bold',
        textShadowColor : 'black',
    },
    mailText: {
        position: "absolute",
        top: "15%",
        right: "11%",
        fontSize: 18,
        color: 'black',
        fontWeight: 'normal',
        textShadowColor : 'black',
    },
    middleText: {
        position: "absolute",
        top: 200,
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold',
        textShadowColor : 'black',
        alignItems: 'center',
    },
    textContainer: {
        position: "absolute",
        bottom: 25,
        width: "85%",
        height: "55%",
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateText: {
        position: "absolute",
        bottom: 310,
        left: 50,
        fontSize: 25,
        color: '#FF5F5F',
        fontWeight: 'bold',
    },
    infoText: {
        position: "absolute",
        bottom: 260,
        left: 50,
        fontSize: 19,
        color: 'black',
        fontWeight: 'bold',
    },
    Burger: {
        position: "absolute",
        height: 25,
        width: 25,
    },
    textContainer: {
        position: "absolute",
        top: "31%",
        width: "90%",
        height: "65%",
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Profile;