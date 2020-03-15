import {StyleSheet} from 'react-native';

import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  loading: {
    marginTop: metrics.baseMargin * 2,
    color: colors.secundary,
  },
  columnWrapper: {
    marginHorizontal: metrics.baseMargin * 2,
    justifyContent: 'space-between',
  },
  errorOrg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  errorText: {
    fontSize: 24,
    color: colors.danger,
    textAlign: 'center',
  },
  errorIcon: {
    color: colors.danger,
  },
});

export default styles;
