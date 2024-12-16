//import : react components
import React from 'react';
import {Text} from 'react-native';
//import : third parties
import {RFValue} from 'react-native-responsive-fontsize';

const MyText = ({
  text,
  fontSize = 14,
  fontWeight,
  textColor,
  marginBottom,
  marginHorizontal,
  marginVertical,
  textAlign,
  marginLeft,
}) => {
  return (
    <Text
      style={{
        fontSize: RFValue(fontSize),
        fontWeight,
        color: textColor,
        marginBottom,
        marginHorizontal,
        marginVertical,
        textAlign,
        marginLeft,
      }}>
      {text}
    </Text>
  );
};

export default MyText;
