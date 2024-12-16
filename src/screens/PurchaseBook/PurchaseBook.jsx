//import : react components
import React from 'react';
import {View} from 'react-native';
//import : custom components
import AuthHeader from 'components/MyHeader/AuthHeader';
import SizeBox from 'components/SizeBox/SizeBox';
import MyText from 'components/MyText/MyText';
import MyButton from 'components/MyButton/MyButton';
//import : utils
import {Colors} from 'global/Index';
import LogoSvg from 'assets/svg/logo.svg';
//import : styles
import {styles} from './PurchaseBookStyle';

const PurchaseBook = () => {
  //UI
  return (
    <View style={styles.container}>
      <AuthHeader hasLogo={false} />
      <View style={styles.mainView}>
        <View style={styles.elevatedView}>
          <View style={styles.headerStyle}>
            <MyText text={'Purchase'} fontSize={18} fontWeight={'bold'} />
            <MyText
              text={'Please Make The Payment To Start Reading Rastafari Bible'}
              textAlign={'center'}
              marginVertical={20}
            />
            <SizeBox value={15} />
            <View
              style={{
                position: 'absolute',
                bottom: -10,
                backgroundColor: Colors.BLACK,
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                height: 40,
                borderRadius: 10,
              }}>
              <MyText
                text={'$999.0'}
                textColor={Colors.WHITE}
                fontWeight={'bold'}
                fontSize={18}
              />
            </View>
          </View>
          <View
            style={{
              alignSelf: 'center',
              marginVertical: 25,
            }}>
            <LogoSvg />
          </View>

          <MyButton title={'Make Payment'} />
        </View>
      </View>
    </View>
  );
};

export default PurchaseBook;
