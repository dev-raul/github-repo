import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 54 + getStatusBarHeight(),
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darker,
  },
  icon: {
    color: colors.darker,
  },
});

export default styles;
