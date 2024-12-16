import React, {useRef} from 'react';
import {View, NativeModules, Text, Platform} from 'react-native';
import {styles} from './HomeStyle';
import MainHeader from 'components/MyHeader/MainHeader';
import PSPDFKitView from 'react-native-pspdfkit';
// const PSPDFKit = NativeModules.PSPDFKit;
// PSPDFKit.setLicenseKey(null);
const Home = () => {
  //variables
  const pdfRef = useRef(null);
  const DOCUMENT =
    Platform.OS === 'ios'
      ? 'Document.pdf'
      : 'file:///android_asset/Document.pdf';
  //UI
  return (
    <View style={styles.container}>
      <MainHeader />
      {/* <PSPDFKitView
        document={DOCUMENT}
        configuration={{
          showThumbnailBar: 'none',
          pageTransition: 'curl',
          scrollDirection: 'horizontal',
        }}
        ref={pdfRef}
        fragmentTag="PDF1"
        style={{flex: 1}}
      /> */}
    </View>
  );
};

export default Home;
