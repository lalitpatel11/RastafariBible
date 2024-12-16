import {Colors} from 'global/Index';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK + '66',
    justifyContent: 'center',
  },
  mainView: {
    padding: 20,
    backgroundColor: Colors.WHITE,
    margin: 20,
    borderRadius: 20,
  },
});
