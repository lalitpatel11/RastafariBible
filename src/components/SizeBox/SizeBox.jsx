import {View} from 'react-native';
import React from 'react';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
const SizeBox = ({value, percentage = 0}) => {
  //UI
  return (
    <View
      style={{
        height: value ? RFValue(value) : RFPercentage(percentage),
        width: value ? RFValue(value) : RFPercentage(percentage),
      }}
    />
  );
};

export default SizeBox;
