import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {Colors, Constant} from 'global/Index';

const MyTextInput = ({placeholder, hasRightBtn = false, rightView}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.YELLOW,
        height: Constant.TEXT_INPUT_HEIGHT,
        marginVertical: 10,
        borderRadius: 5,
      }}>
      <TextInput
        placeholder={placeholder}
        style={{
          height: Constant.TEXT_INPUT_HEIGHT,
          paddingLeft: 10,
          fontSize: 16,
          width: hasRightBtn ? '80%' : '100%',
        }}
      />
      {hasRightBtn && <>{rightView}</>}
    </View>
  );
};

export default MyTextInput;
