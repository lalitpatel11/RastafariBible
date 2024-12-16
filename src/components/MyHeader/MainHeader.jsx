//import : react components
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
//import : custom components
import MyText from 'components/MyText/MyText';
//import : utils
import {Colors, MyIcon} from 'global/Index';

const MainHeader = () => {
  //variables
  const navigation = useNavigation();
  const ICON_VIEW_SIZE = 40;
  const BORDER_RADIUS = 5;
  //function : nav func
  const openDrawer = () => navigation.dispatch(DrawerActions.openDrawer());
  //UI
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.GREEN,
        padding: 15,
      }}>
      <TouchableOpacity
        onPress={() => openDrawer()}
        style={{
          height: ICON_VIEW_SIZE,
          width: ICON_VIEW_SIZE,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: BORDER_RADIUS,
          backgroundColor: Colors.YELLOW,
        }}>
        <MyIcon.Feather name="menu" size={24} />
      </TouchableOpacity>
      <View
        style={{
          borderWidth: 1,
          borderColor: Colors.YELLOW,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '60%',
          borderRadius: 5,
          padding: 2,
        }}>
        <MyText text={'Genesis'} marginLeft={10} textColor={Colors.WHITE} />
        <TouchableOpacity
          style={{
            height: ICON_VIEW_SIZE,
            width: ICON_VIEW_SIZE,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: BORDER_RADIUS,
            backgroundColor: Colors.YELLOW,
          }}>
          <MyIcon.AntDesign name="caretdown" size={24} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          height: ICON_VIEW_SIZE,
          width: ICON_VIEW_SIZE,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: BORDER_RADIUS,
          backgroundColor: Colors.YELLOW,
        }}>
        <MyIcon.Feather name="search" size={24} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: ICON_VIEW_SIZE,
          width: ICON_VIEW_SIZE,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: BORDER_RADIUS,
          backgroundColor: Colors.YELLOW,
        }}>
        <MyIcon.Feather name="bookmark" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default MainHeader;
