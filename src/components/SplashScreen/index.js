import React from 'react';
import {View, ActivityIndicator, StyleSheet, StatusBar} from 'react-native';

import {colors} from '../../styles';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secundary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: colors.white,
  },
});
export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.secundary} barStyle="light-content" />
      <ActivityIndicator style={styles.icon} size="large" />
    </View>
  );
}
