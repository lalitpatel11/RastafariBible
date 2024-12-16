//import : react components
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//import : utils
import {ScreenName} from 'global/Index';
//import : screens
import Splash from 'screens/Splash/Splash';
import Welcome from 'screens/Welcome/Welcome';
import Login from 'screens/Login/Login';
import SignUp from 'screens/SignUp/SignUp';
import PurchaseBook from 'screens/PurchaseBook/PurchaseBook';
import Home from 'screens/Home/Home';

const MainStack = () => {
  //variables
  const Stack = createStackNavigator();
  //UI
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenName.SPLASH} component={Splash} />
      <Stack.Screen name={ScreenName.WELCOME} component={Welcome} />
      <Stack.Screen name={ScreenName.LOGIN} component={Login} />
      <Stack.Screen name={ScreenName.SIGNUP} component={SignUp} />
      <Stack.Screen name={ScreenName.PURCHASE_BOOK} component={PurchaseBook} />
      <Stack.Screen name={ScreenName.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default MainStack;
