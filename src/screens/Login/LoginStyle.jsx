import {Colors} from 'global/Index';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1},
  mainView: {
    padding: 20,
  },
  elevatedView: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: Colors.WHITE,
    padding: 20,
    borderRadius: 10,
  },
  headerStyle: {
    backgroundColor: Colors.YELLOW,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
});
