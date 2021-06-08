import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';


class Register extends Component {

    onUsernameChange(text) {
        this.setState({ username: text });
      }
    
      onPasswordChange(text) {
        this.setState({ password: text });
      }
    
      onFirstNameChange(text) {
        this.setState({ firstName: text });
      }
    
      onLastNameChange(text) {
        this.setState({ lastName: text });
      }
    
      handleRequest() {
        const endpoint =  'register' ;
        const payload = { username: this.state.username, password: this.state.password, first_name: this.state.firstName, last_name: this.state.lastName } 
        
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
                        paddingTop: 15,
                        fontSize: 30,
                        color: 'black',
                    }}>Zarejestruj się!</Text>

                    <View style={styles.textInputContainer}>
                        <TextInput style={styles.textLabel} 
                        label="Imie"
                        returnKeyType="next"
                        onChangeText={this.onFirstNameChange.bind(this)}
                        />
                        <TextInput style={styles.textLabel}
                        label="Nazwisko"
                        returnKeyType="next"
                        onChangeText={this.onLastNameChange.bind(this)}
                        />
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
  
export default Register;
  

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
        fontSize: 25,
        color: 'white',
        textShadowColor : 'black',
        textShadowRadius: 5,
    },
    logoIco: {
        height: 75,
        width: 75,
    },
    background: {
        width: '100%',
        height: '70%',
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
        marginTop:20,
        width: "50%",
        height: "10%",
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