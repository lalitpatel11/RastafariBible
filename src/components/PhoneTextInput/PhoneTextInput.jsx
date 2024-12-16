import {View, Text, TextInput} from 'react-native';
import React from 'react';
import MyText from 'components/MyText/MyText';
import {Colors, Constant, MyIcon} from 'global/Index';

const PhoneTextInput = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.YELLOW,
        height: Constant.TEXT_INPUT_HEIGHT,
        marginVertical: 10,
        borderRadius: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: Colors.YELLOW,
          height: '100%',
          width: '20%',
        }}>
        <MyText text={'+1'} />
        <MyIcon.AntDesign name="caretdown" size={20} />
      </View>

      <TextInput
        placeholder="(404) 207-5620"
        style={{
          paddingLeft: 15,
          fontSize: 16,
        }}
      />
    </View>
  );
};

export default PhoneTextInput;
