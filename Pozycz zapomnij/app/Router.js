import React from 'react';
import { Scene, Stack, Router, Actions } from 'react-native-router-flux';
import { StyleSheet, StatusBar, Button } from 'react-native';
import Welcome from './screens/WelcomeScreen'
import Login from './screens/LoginScreen';
import Register from './screens/RegisterScreen';
import Profile from './screens/ProfilScreen';
import Menu from './screens/MenuScreen';
import Finances from './screens/FinanseScreen';
import Uzyczone from './screens/UzyczoneScreen';
import Pozyczone from './screens/ZapozyczoneScreen';


const RouterComponent = () => {
  return (
    <Router>
      <Stack hideNavBar key="root" hideNavBar={true} >
        <Stack
          key="auth"
          type="reset"
          navigationBarStyle={style.navBarStyle}
          titleStyle={style.titleStyle}
        >
          <Scene
            title="Welcome"
            key="welcome"
            hideNavBar={true} 
            component={Welcome}
            initial
          />
          <Scene
            title="Login"
            key="login"
            hideNavBar={true}
            component={Login}
          />
          <Scene
            title="Register"
            key="register"
            hideNavBar={true}
            component={Register}
          />  
        </Stack>
        <Stack
          key="main"
          type="reset"
          navigationBarStyle={style.navBarStyle}
          titleStyle={style.titleStyle}
        >
          <Scene
            title="Profile"
            key="profile"
            component={Profile}
            hideNavBar={true}
            initial
          />
          <Scene
            title="Menu"
            key="menu"
            component={Menu}
            hideNavBar={true}
          />
          <Scene
            title="Finances"
            key="finances"
            component={Finances}
            hideNavBar={true}
          />
          <Scene
            title="Uzyczone"
            key="uzyczone"
            component={Uzyczone}
            hideNavBar={true}
          />
          <Scene
            title="Pozyczone"
            key="pozyczone"
            component={Pozyczone}
            hideNavBar={true}
          />
        </Stack>
      </Stack>
    </Router>
  );
};


const style = StyleSheet.create({
  navBarStyle: {
    top: StatusBar.currentHeight
  },
  titleStyle: {
    flexDirection: 'row',
    width: 200
  }
});

export default RouterComponent;
