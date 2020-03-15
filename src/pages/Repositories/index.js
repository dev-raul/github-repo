import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Text, View, FlatList, ActivityIndicator} from 'react-native';
import Header from '../../components/Header';

import RepositoriesItem from './RepositoriesItem';

export default function Repositories() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    refreshRepo();
  }, []);

  async function refreshRepo() {
    setRefresh(true);
    const username = await AsyncStorage.getItem('@REPOGIT:user');
    const response = await api.get(`/users/${username}/repos`);

    setRepos(response.data);
    setLoading(false);
    setRefresh(false);
  }
  const renderItem = ({item}) => <RepositoriesItem repository={item} />;
  const renderRepos = () => {
    if (repos.length === 0) {
      return (
        <View style={styles.errorRepo}>
          <Text style={styles.errorText}>Você não tem repositórios</Text>
          <Icon style={styles.errorIcon} name="angellist" size={50} />
        </View>
      );
    }

    return (
      <FlatList
        data={repos}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
        onRefresh={refreshRepo}
        refreshing={refresh}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Repositórios" />
      {loading ? <ActivityIndicator style={styles.loading} /> : renderRepos()}
    </View>
  );
}
