//import : react comoponents
import React from 'react';
import {View, Modal, TouchableOpacity} from 'react-native';
//import : custom components
import MyText from 'components/MyText/MyText';
import PasswordTextInput from 'components/PasswordTextInput/PasswordTextInput';
import MyButton from 'components/MyButton/MyButton';
//import : styles
import {styles} from './NewPasswordStyle';

const NewPassword = ({visible, setVisibility, nextFunction = () => {}}) => {
  //function : modal func
  const closeModal = () => {
    setVisibility(false);
  };
  //Ui
  return (
    <Modal visible={visible} transparent animationType="fade">
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
              text={'Otp Verified Successfully! '}
              fontSize={12}
              marginVertical={10}
            />
            <MyText
              text={'Please Create New Password'}
              fontSize={10}
              fontWeight={'bold'}
            />
          </View>
          <PasswordTextInput placeholder={'Create New Password'} />
          <PasswordTextInput placeholder={'Confirm Password'} />
          <MyButton
            title={'Save Password'}
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

export default NewPassword;
