import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Colors, Constant, MyIcon} from 'global/Index';

const PasswordTextInput = ({placeholder}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View
      style={{
        marginVertical: 10,
        borderWidth: 1,
        borderColor: Colors.YELLOW,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: Constant.TEXT_INPUT_HEIGHT,
        borderRadius: 5,
      }}>
      <TextInput
        placeholder={placeholder}
        style={{
          fontSize: 16,
          paddingLeft: 10,
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: Colors.YELLOW,
          height: Constant.TEXT_INPUT_HEIGHT - 10,
          width: 60,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 10,
          borderRadius: 5,
        }}>
        <MyIcon.Feather name="eye" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordTextInput;
