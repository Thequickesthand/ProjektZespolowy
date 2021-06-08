import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

class Login extends Component {

    onUsernameChange(text) {
        this.setState({ username: text });
      }
    
      onPasswordChange(text) {
        this.setState({ password: text });
      }
    
      handleRequest() {
        const endpoint = 'login';
        const payload = { username: this.state.username, password: this.state.password } 
        
        console.log(payload);
        
        axios
          .post(`/auth/${endpoint}/`, payload)
          .then(response => {
            const { token, user } = response.data;
    
            axios.defaults.headers.common.Authorization = `Token ${token}`;
            
            Actions.main();
          })
          .catch(error => console.log(error));
      }

    render() {
      return (
        <SafeAreaView style={{flex: 1}}>
        <LinearGradient colors={['dodgerblue', 'white']} style={styles.container}>
            <StatusBar translucent backgroundColor="transparent"/>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logoApk.png')} style={styles.logoIco}/>
                <Text style={styles.logoText}>Pożycz i zapomnij</Text>
            </View>
            
            <View style={styles.background}>   
                <Text 
                style={{
                    paddingTop: 20,
                    fontSize: 30,
                    color: 'black',
                    textShadowRadius: 15,
                }}>Zaloguj się</Text>

                <View style={styles.textInputContainer}>
                    <TextInput style={styles.textLabel}
                    label="Email"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    onChangeText={this.onUsernameChange.bind(this)}
                    />
                    <TextInput style={styles.textLabel}
                    label="Hasło"
                    returnKeyType="done"
                    onChangeText={this.onPasswordChange.bind(this)}
                    secureTextEntry
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleRequest.bind(this)}>
                    <Text style={styles.buttonText}>Dalej</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    </SafeAreaView>
      );
    }
  }
  
export default Login;
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
    logoContainer:{
        position: "absolute",
        top: '10%',
        alignItems: 'center',
    },
    logoText: {
        fontSize: 30,
        color: 'white',
        textShadowColor : 'black',
        textShadowRadius: 5,
    },
    logoIco: {
        height: 100,
        width: 100,
    },
    background: {
        width: '100%',
        height: '50%',
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
        marginTop:30,
        width: "50%",
        height: "15%",
        backgroundColor: "dodgerblue",
        borderRadius:30,
        alignItems: 'center',
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 25,
        color: 'white',
    }
})

