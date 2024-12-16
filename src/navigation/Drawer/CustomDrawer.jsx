import {View, Text, ImageBackground, Pressable, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './CustomDrawerStyle';
import LogoSvg from 'assets/svg/logo.svg';
import {Colors, MyIcon} from 'global/Index';
import MyText from 'components/MyText/MyText';
const CustomDrawer = () => {
  //Ui
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="stretch"
        source={require('assets/images/splash_bg.png')}
        style={styles.imageStyle}>
        <View
          style={{
            alignSelf: 'center',
            padding: 20,
          }}>
          <LogoSvg height={150} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: Colors.BLACK,
            padding: 15,
          }}>
          <MyIcon.Feather name="book-open" color={Colors.WHITE} size={24} />
          <MyText text={'Resume Reading'} textColor={Colors.WHITE} />
          <View
            style={{
              backgroundColor: Colors.YELLOW,
              height: 30,
              width: 45,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <MyIcon.AntDesign
              name="arrowright"
              color={Colors.BLACK}
              size={24}
            />
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: '10%',
          }}>
          <DrawerItem
            title={'Table Of Content'}
            icon={
              <MyIcon.MaterialCommunityIcons
                name="table-of-contents"
                size={24}
              />
            }
          />
          <DrawerItem
            title={'Bible Study'}
            icon={<MyIcon.Feather name="book" size={24} />}
          />
          <DrawerItem
            title={'Daily Word'}
            icon={
              <MyIcon.MaterialCommunityIcons
                name="format-letter-case"
                size={24}
              />
            }
          />
          <DrawerItem
            title={'Bookmarks'}
            hasNewMsg
            icon={<MyIcon.Feather name="bookmark" size={24} />}
          />
          <DrawerItem
            title={'Notes'}
            icon={<MyIcon.Feather name="clipboard" size={24} />}
          />
          <DrawerItem
            title={'Notifications'}
            hasNewMsg
            icon={<MyIcon.Feather name="bell" size={24} />}
          />
          <DrawerItem
            title={'Settings'}
            icon={<MyIcon.Feather name="settings" size={24} />}
          />
          <DrawerItem
            title={'My Profile'}
            icon={<MyIcon.Feather name="user" size={24} />}
          />
          <DrawerItem
            title={'Feedback'}
            icon={<MyIcon.Ionicons name="chatbox-ellipses-outline" size={24} />}
          />
          <DrawerItem
            title={'Terms & Conditions'}
            icon={<MyIcon.Ionicons name="document-text-outline" size={24} />}
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default CustomDrawer;

const DrawerItem = ({icon, title, hasNewMsg = false}) => {
  const ICON_SIZE = 40;
  return (
    <>
      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: ICON_SIZE,
              width: ICON_SIZE,
              backgroundColor: Colors.YELLOW,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              marginRight: 10,
            }}>
            {icon}
          </View>
          <MyText text={title} fontSize={12} fontWeight={'bold'} />
        </View>

        {hasNewMsg ? (
          <View
            style={{backgroundColor: Colors.RED, padding: 3, borderRadius: 5}}>
            <MyText text={'03 New'} textColor={Colors.WHITE} fontSize={9} />
          </View>
        ) : (
          <View style={{width: '5%'}} />
        )}
      </Pressable>
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: Colors.LITE_GREY,
        }}
      />
    </>
  );
};
