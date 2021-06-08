import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

class Menu extends Component {

    handleRequest() {
        axios
          .get('/auth/logout/')
          .then(response => {
            Actions.auth()
          })
          .catch(error =>  console.log(error));
      }

    render() {     
      return (
        <SafeAreaView style={{flex: 1}}>
        <LinearGradient colors={['#2B4475', '#2B4475', 'white']} style={styles.container}>
            <StatusBar translucent backgroundColor="transparent"/>
            <View style={styles.logoContainer}>
                <Text style={styles.nameText}>Adam Kowalski</Text>
                <Text style={styles.mailText}>adam.kowalski@gmail.com</Text>
            </View>
            <View style={styles.background}>

                <TouchableOpacity onPress={() => Actions.profile()} style={styles.button}>
                    <Image source={require('../assets/home.png')} style={styles.menuIcon}/>
                    <Text style={styles.buttonText}>      Profil</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Actions.finances()} style={styles.button}>
                    <Image source={require('../assets/finanse.png')} style={styles.menuIcon}/>
                    <Text style={styles.buttonText}>      Finanse</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Actions.pozyczone()} style={styles.button}>
                    <Image source={require('../assets/shop.png')} style={styles.menuIcon}/>
                    <Text style={styles.buttonText}>      Pożyczone przedmioty</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Actions.uzyczone()} style={styles.button}>
                    <Image source={require('../assets/shop.png')} style={styles.menuIcon}/>
                    <Text style={styles.buttonText}>      Użyczone przedmioty</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.handleRequest.bind(this)} style={styles.button}>
                    <Image source={require('../assets/logout.png')} style={styles.menuIcon}/>
                    <Text style={styles.buttonText}>      Wyloguj</Text>
                </TouchableOpacity>
            </View>

        </LinearGradient>
    </SafeAreaView>
      );
    }
  }
  
  export default Menu;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
    logoContainer:{
        position: "absolute",
        top: "10%",
        alignItems: 'center',
    },
    logoIco: {
        height: 100,
        width: 100,
    },
    background: {
        width: '100%',
        height: '60%',
        backgroundColor: "white",
        borderRadius:30,
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: "absolute",
    },
    textInputContainer: {
        paddingTop: 35,
        width: "70%",
    },
    textLabel: {
        height: 60,
        marginBottom: 15,
    },
    button: {
        marginTop: "10%",
        marginStart: "10%",
        right : "5%",
        width: "75%",
        height: "10%",
        backgroundColor: "white",
        borderRadius: 30,
        alignItems: 'baseline',
        flexDirection: 'row',
    },
    buttonText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        justifyContent: 'space-between',
    },
    nameText: {
        top: "10%",
        fontSize: 27,
        color: 'white',
        fontWeight: 'bold',
        textShadowColor : 'black',
    },
    mailText: {
        top: "15%",
        fontSize: 18,
        color: 'white',
        fontWeight: 'normal',
        textShadowColor : 'black',
    },
    menuIcon: {
        width: 35,
        height: 35,
    }
})