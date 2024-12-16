//import : react components
import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
//import : custom components
import AuthHeader from 'components/MyHeader/AuthHeader';
import MyText from 'components/MyText/MyText';
import MyTextInput from 'components/MyTextInput/MyTextInput';
import SizeBox from 'components/SizeBox/SizeBox';
import MyButton from 'components/MyButton/MyButton';
import PasswordTextInput from 'components/PasswordTextInput/PasswordTextInput';
//import : utils
import {Colors, ScreenName} from 'global/Index';
//import : styles
import {styles} from './LoginStyle';
//import : modal
import ForgotPassword from 'modals/ForgotPassword/ForgotPassword';
import NewPassword from 'modals/NewPassword/NewPassword';
import SuccessModal from 'modals/SuccessModal/SuccessModal';

const Login = ({navigation}) => {
  //hook : modal states
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  //function : nav func
  const gotoSignUp = () => navigation.navigate(ScreenName.SIGNUP);
  const gotoHome = () => navigation.replace(ScreenName.HOME);
  //UI
  return (
    <View style={styles.container}>
      <AuthHeader />
      <View style={styles.mainView}>
        <View style={styles.elevatedView}>
          <View style={styles.headerStyle}>
            <MyText
              text={'Login'}
              fontSize={18}
              fontWeight={'bold'}
              marginBottom={10}
            />
            <MyText text={'Please Enter Your Email & Password'} />
          </View>
          <SizeBox percentage={5} />
          <MyTextInput placeholder={'Enter Email Id'} />
          <PasswordTextInput placeholder={'Enter Password'} />
          <MyButton title={'Login'} onPress={gotoHome} />
          <Pressable onPress={() => setShowPassword(true)}>
            <MyText text={'Forgot Password?'} textAlign={'center'} />
          </Pressable>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: 1,
            width: '35%',
            backgroundColor: Colors.LITE_GREY,
          }}
        />
        <MyText
          text={'or'}
          marginHorizontal={20}
          textColor={Colors.LITE_GREY}
        />
        <View
          style={{
            height: 1,
            width: '35%',
            backgroundColor: Colors.LITE_GREY,
          }}
        />
      </View>
      <Pressable
        onPress={gotoSignUp}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: Colors.YELLOW,
          margin: 20,
          padding: 10,
          borderRadius: 10,
        }}>
        <MyText text={'Don’t Have An Account? Signup'} />
      </Pressable>
      <ForgotPassword
        visible={showPassword}
        setVisibility={setShowPassword}
        nextFunction={() => {
          setShowNewPassword(true);
        }}
      />
      <NewPassword
        visible={showNewPassword}
        setVisibility={setShowNewPassword}
        nextFunction={() => {
          setShowSuccess(true);
        }}
      />
      <SuccessModal visible={showSuccess} setVisibility={setShowSuccess} />
    </View>
  );
};

export default Login;
