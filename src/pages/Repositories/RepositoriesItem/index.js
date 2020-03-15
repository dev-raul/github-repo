import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import styles from './styles';

export default function RepositoriesItem({repository}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {repository.full_name} </Text>
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Icon style={styles.infoIcon} name="star" size={12} />
          <Text style={styles.infoText}> {repository.stargazers_count} </Text>
        </View>
        <View style={styles.info}>
          <Icon style={styles.infoIcon} name="code-fork" size={12} />
          <Text style={styles.infoText}> {repository.forks_count} </Text>
        </View>
        <View style={styles.info}>
          <Icon style={styles.infoIcon} name="eye" size={12} />
          <Text style={styles.infoText}> {repository.watchers_count} </Text>
        </View>
      </View>
    </View>
  );
}

RepositoriesItem.propTypes = {
  repository: PropTypes.shape({
    full_name: PropTypes.string,
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    watchers_count: PropTypes.number,
  }).isRequired,
};
