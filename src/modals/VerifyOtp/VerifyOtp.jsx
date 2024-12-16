//import : react components
import React, {useState} from 'react';
import {View, Modal, TouchableOpacity} from 'react-native';
//import : custom components
import MyText from 'components/MyText/MyText';
import MyButton from 'components/MyButton/MyButton';
import OtpCodeBox from 'components/OtpCodeBox/OtpCodeBox';
//import
import {styles} from './VerifyOtpStyle';

const VerifyOtp = ({visible, setVisibility}) => {
  //hook : states
  const [code, setCode] = useState('');
  //function : modal func
  const closeModal = () => {
    setVisibility(false);
  };
  //UI
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.blurView} onPress={closeModal} />
        <View style={styles.mainView}>
          <MyText
            text={'Wohoo!!!'}
            fontSize={16}
            textAlign={'center'}
            fontWeight={'bold'}
          />
          <MyText
            text={'We have sent you a verification code to '}
            textAlign={'center'}
            fontSize={10}
            marginVertical={10}
          />
          <MyText
            text={'(jaxxoe07@gmail.com)'}
            fontSize={11}
            fontWeight={'bold'}
            textAlign={'center'}
          />
          <OtpCodeBox value={code} setValue={setCode} />
          <MyButton title={'Validate Otp'} />
        </View>
      </View>
    </Modal>
  );
};

export default VerifyOtp;
