import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Text, View, FlatList, ActivityIndicator} from 'react-native';
import Header from '../../components/Header';

import OrganizationItem from './OrganizationItem';

export default function Organizations() {
  const [orgs, setOrgs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    refreshOrganization();
  }, []);

  async function refreshOrganization() {
    setRefresh(true);
    const username = await AsyncStorage.getItem('@REPOGIT:user');
    const response = await api.get(`/users/${username}/orgs`);

    setOrgs(response.data);
    setLoading(false);
    setRefresh(false);
  }
  const renderItem = ({item}) => <OrganizationItem organization={item} />;
  const renderOrganization = () => {
    if (orgs.length === 0) {
      return (
        <View style={styles.errorOrg}>
          <Text style={styles.errorText}>Você não tem organizações</Text>
          <Icon style={styles.errorIcon} name="angellist" size={50} />
        </View>
      );
    }
    return (
      <FlatList
        data={orgs}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        onRefresh={refreshOrganization}
        refreshing={refresh}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Organizações" />
      {loading ? (
        <ActivityIndicator style={styles.loading} />
      ) : (
        renderOrganization()
      )}
    </View>
  );
}
