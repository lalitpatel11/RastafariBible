//import : react components
import React, {useState} from 'react';
import {Pressable, ScrollView, View} from 'react-native';
//import : custom components
import AuthHeader from 'components/MyHeader/AuthHeader';
import MyText from 'components/MyText/MyText';
import MyTextInput from 'components/MyTextInput/MyTextInput';
import MyButton from 'components/MyButton/MyButton';
import PasswordTextInput from 'components/PasswordTextInput/PasswordTextInput';
import PhoneTextInput from 'components/PhoneTextInput/PhoneTextInput';
import SizeBox from 'components/SizeBox/SizeBox';
//import : utils
import {Colors, ScreenName} from 'global/Index';
//import : styles
import {styles} from './SignUpStyle';
//import : modals
import VerifyOtp from 'modals/VerifyOtp/VerifyOtp';

const SignUp = ({navigation}) => {
  //hook : states
  const [showVerifyOtp, setShowVerifyOtp] = useState(false);
  //function : nav func
  const gotoLogin = () => navigation.navigate(ScreenName.LOGIN);
  const gotoPurchaseBook = () => navigation.navigate(ScreenName.PURCHASE_BOOK);
  //UI
  return (
    <View style={styles.container}>
      <AuthHeader hasLogo={false} />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: '20%',
        }}
        style={styles.mainView}>
        <View style={styles.elevatedView}>
          <View style={styles.headerStyle}>
            <MyText
              text={'Signup'}
              fontSize={18}
              fontWeight={'bold'}
              marginBottom={10}
            />
            <MyText text={'Please Enter Your Email & Password'} />
          </View>
          <MyTextInput placeholder={'Full Name'} />
          <MyTextInput
            placeholder={'Enter Email'}
            hasRightBtn={true}
            rightView={
              <MyButton
                width="20%"
                height={45}
                title={'Verify'}
                onPress={() => setShowVerifyOtp(true)}
              />
            }
          />
          <PhoneTextInput />
          <PasswordTextInput placeholder={'Create New Password'} />
          <PasswordTextInput placeholder={'Confirm Password'} />
          <SizeBox percentage={5} />
          <MyButton title={'Signup'} onPress={gotoPurchaseBook} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10,
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
          onPress={gotoLogin}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: Colors.YELLOW,
            margin: 20,
            padding: 10,
            borderRadius: 10,
          }}>
          <MyText text={'Already Have An Account? Login'} />
        </Pressable>
      </ScrollView>
      <VerifyOtp visible={showVerifyOtp} setVisibility={setShowVerifyOtp} />
    </View>
  );
};

export default SignUp;
