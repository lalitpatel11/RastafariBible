//import : react components
import {Colors} from 'global/Index';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
//import : utils
//import : third parties
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const OtpCodeBox = ({value, setValue, nextFunction = () => {}}) => {
  //variables
  const CELL_COUNT = 4;
  //hook : states
  const [isFull, setIsFull] = React.useState(false);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT, setIsFull});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  //function : imp func
  const handleFulfill = code => {
    if (code.length === CELL_COUNT) {
      setIsFull(true);
      nextFunction(code);
    }
  };
  //UI
  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={code => {
        setValue(code);
        handleFulfill(code);
      }}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFiledRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({index, symbol, isFocused}) => (
        <Text
          key={index}
          style={[
            styles.cell,
            isFocused && styles.focusCell,
            isFull && styles.full,
          ]}
          onLayout={getCellOnLayoutHandler(index)}>
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      )}
    />
  );
};

export default OtpCodeBox;
const styles = StyleSheet.create({
  codeFiledRoot: {marginVertical: 20},
  cell: {
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '20%',
    borderRadius: 10,
    height: 50,
    lineHeight: 45,
    fontSize: 24,
    borderWidth: 2,
    color: Colors.theme,
    borderColor: Colors.YELLOW,
  },
  focusCell: {
    borderColor: Colors.BLACK,
    textAlign: 'center',
  },
  full: {
    borderColor: Colors.BLACK,
    textAlign: 'center',
  },
  fullMessage: {
    marginTop: 20,
    alignItems: 'center',
  },
});
