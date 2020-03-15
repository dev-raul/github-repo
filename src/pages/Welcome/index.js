import React, {useEffect, useState, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
import {colors} from '../../styles/index';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import AuthContext from '../../services/AuthContext';
import styles from './styles';

export default function Welcome() {
  const [usuario, setUsuario] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const {signIn} = useContext(AuthContext);

  async function handleSubmit() {
    setLoading(true);
    try {
      const username = await api.get(`/users/${usuario}`);
      if (username) {
        await AsyncStorage.setItem('@REPOGIT:user', usuario);
        signIn(usuario);
      }
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.secundary} />
      <Text style={styles.title}> Bem-vindo </Text>
      <Text style={styles.text}>
        Para continuar precisamos de você informe seu usuário no github
      </Text>
      {error && <Text style={styles.error}> Usuário não econtrado! </Text>}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu usuário"
          value={usuario}
          onChangeText={user => setUsuario(user)}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          {loading ? (
            <ActivityIndicator size={23} color="#FFF" />
          ) : (
            <Text style={styles.buttonText}>Pressionar</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
