//import : react components
import React from 'react';
import {View} from 'react-native';
//import : custom components
import SizeBox from 'components/SizeBox/SizeBox';
import MyButton from 'components/MyButton/MyButton';
//import : utils
import LogoSvg from 'assets/svg/logo.svg';
import {Colors, ScreenName} from 'global/Index';
//import : styles
import {styles} from './WelcomeStyle';

const Welcome = ({navigation}) => {
  //function : nav func
  const gotoLogin = () => navigation.navigate(ScreenName.LOGIN);
  const gotoSignUp = () => navigation.navigate(ScreenName.SIGNUP);
  //UI
  return (
    <View style={styles.container}>
      <LogoSvg />
      <SizeBox percentage={10} />
      <MyButton title={'Login'} onPress={gotoLogin} />
      <MyButton
        title={'Signup'}
        backgroundColor={Colors.WHITE}
        textColor={Colors.BLACK}
        hasBorder
        onPress={gotoSignUp}
      />
    </View>
  );
};

export default Welcome;
