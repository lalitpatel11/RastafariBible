import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ScreenName} from 'global/Index';
import MainStack from 'navigation/Stack/MainStack';
import CustomDrawer from './CustomDrawer';
const Drawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={() => <CustomDrawer />}>
      <Drawer.Screen name={ScreenName.MAIN_STACK} component={MainStack} />
    </Drawer.Navigator>
  );
};

export default Drawer;
