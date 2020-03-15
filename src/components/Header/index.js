import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import AuthContext from '../../services/AuthContext';
import styles from './styles';

function Header({title}) {
  const {signOut} = useContext(AuthContext);
  async function handleLogout() {
    await AsyncStorage.clear();
    signOut();
  }
  return (
    <View style={styles.container}>
      <View style={styles.left} />
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Icon name="exchange" size={16} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
