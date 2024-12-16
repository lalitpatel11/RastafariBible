//import : react components
import React from 'react';
import {View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
//import : utils
import LogoSvg from 'assets/svg/logo.svg';
import {Colors, MyIcon} from 'global/Index';

const AuthHeader = ({hasLogo = true}) => {
  //variables
  const navigation = useNavigation();
  //function : nav fun c
  const goBack = () => navigation.goBack();
  //UI
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 20,
      }}>
      <Pressable
        onPress={goBack}
        style={{
          backgroundColor: Colors.GREEN,
          alignSelf: 'flex-start',
          width: '25%',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <MyIcon.AntDesign name="arrowleft" color={Colors.WHITE} size={30} />
      </Pressable>
      {hasLogo && <LogoSvg height={150} />}
    </View>
  );
};

export default AuthHeader;
