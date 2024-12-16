//import : react components
import React, {useEffect} from 'react';
import {ImageBackground, View} from 'react-native';
//import : utils
import LogoSvg from 'assets/svg/logo.svg';
import {ScreenName} from 'global/Index';
//import : styles
import {styles} from './SplashStyle';

const Splash = ({navigation}) => {
  //function : nav func
  const gotoWelcome = () => navigation.navigate(ScreenName.WELCOME);
  //hook : useEffect
  useEffect(() => {
    setTimeout(() => {
      gotoWelcome();
    }, 3000);
    return () => {};
  }, []);

  //UI
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('assets/images/splash_bg.png')}
        style={styles.container}>
        <View style={styles.mainView}>
          <LogoSvg />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Splash;
