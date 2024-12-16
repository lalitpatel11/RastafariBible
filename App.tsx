// import React, {Component} from 'react';
// import {Platform, View} from 'react-native';
// import PSPDFKitView from 'react-native-pspdfkit';
// import {NativeModules} from 'react-native';

// const PSPDFKit = NativeModules.PSPDFKit;
// PSPDFKit.setLicenseKey(null);

// const DOCUMENT =
//   Platform.OS === 'ios' ? 'Document.pdf' : 'file:///android_asset/Document.pdf';
// export default class PSPDFKitDemo extends Component<{}> {
//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//         }}>
//         <PSPDFKitView
//           document={DOCUMENT}
//           configuration={{
//             showThumbnailBar: 'none',
//             pageTransition: 'curl',
//             scrollDirection: 'horizontal',
//           }}
//           ref="pdfView"
//           fragmentTag="PDF1"
//           style={{flex: 1}}
//         />
//       </View>
//     );
//   }
// }

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation/Stack/MainStack';
import {SafeAreaView} from 'react-native';
import Drawer from 'navigation/Drawer/Drawer';
const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <Drawer />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
