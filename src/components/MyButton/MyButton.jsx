//import : react components
import React from 'react';
import {TouchableOpacity} from 'react-native';
//import : custom components
import MyText from 'components/MyText/MyText';
//import : utils
import {Colors} from 'global/Index';

const MyButton = ({
  title,
  width = '100%',
  height = 60,
  backgroundColor = Colors.GREEN,
  marginVertical = 10,
  textColor = Colors.WHITE,
  borderRadius = 10,
  hasBorder = false,
  borderColor = Colors.YELLOW,
  onPress = () => {},
  style,
}) => {
  //UI
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        backgroundColor,
        width,
        height,
        marginVertical,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius,
        borderWidth: hasBorder ? 1 : 0,
        borderColor,
        ...style,
      }}>
      <MyText text={title} fontWeight={'bold'} textColor={textColor} />
    </TouchableOpacity>
  );
};

export default MyButton;
