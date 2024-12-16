//import : react components
import React from 'react';
import {View, Modal} from 'react-native';
//import : custom components
import MyText from 'components/MyText/MyText';
import MyButton from 'components/MyButton/MyButton';
//import : utils
import {Colors, MyIcon} from 'global/Index';
//import : styles
import {styles} from './SuccessModalStyle';

const SuccessModal = ({visible, setVisibility}) => {
  //function : modal func
  const closeModal = () => {
    setVisibility(false);
  };
  //UI
  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.container}>
        <View style={styles.mainView}>
          <View
            style={{
              alignSelf: 'center',
            }}>
            <MyIcon.MaterialCommunityIcons
              name="check-decagram"
              size={45}
              color={Colors.GREEN}
            />
          </View>
          <MyText
            text={'Password Change Successfully'}
            fontSize={16}
            fontWeight={'bold'}
            textAlign={'center'}
            marginVertical={15}
          />
          <MyButton title={'Close'} onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
};

export default SuccessModal;
