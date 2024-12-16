//import : react components
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
//import : custom components
import MyText from 'components/MyText/MyText';
//import : styles
import {styles} from './ForgotPasswordStyle';
import OtpCodeBox from 'components/OtpCodeBox/OtpCodeBox';
import MyButton from 'components/MyButton/MyButton';

const ForgotPassword = ({visible, setVisibility, nextFunction = () => {}}) => {
  //hook : states
  const [otp, setOtp] = useState('');
  //function : modal func
  const closeModal = () => {
    setVisibility(false);
  };
  //UI
  return (
    <Modal transparent visible={visible}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.blurView} />
        <View style={styles.mainView}>
          <View style={styles.headerStyle}>
            <MyText
              text={'Forgot Password'}
              fontSize={18}
              fontWeight={'bold'}
            />
            <MyText
              text={'We have sent you a verification code to '}
              fontSize={12}
              marginVertical={10}
            />
            <MyText
              text={'(jaxxoe07@gmail.com)'}
              fontSize={10}
              fontWeight={'bold'}
            />
          </View>
          <OtpCodeBox value={otp} setValue={setOtp} />
          <MyButton
            title={'Validate OTP'}
            onPress={() => {
              closeModal();
              nextFunction();
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ForgotPassword;
