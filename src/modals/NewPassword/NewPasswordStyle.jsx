import {Colors} from 'global/Index';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK + '66',
  },
  blurView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  mainView: {
    padding: 20,
    backgroundColor: Colors.WHITE,
    margin: 20,
    borderRadius: 20,
  },
  headerStyle: {
    backgroundColor: Colors.YELLOW,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
});
