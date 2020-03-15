import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../styles';

import Repositories from '../pages/Repositories';
import Organizations from '../pages/Organizations';

const Tab = createBottomTabNavigator();

export default function HomeRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;
          if (route.name === 'Repositories') {
            iconName = 'list';
          }
          if (route.name === 'Organizations') {
            iconName = 'building';
          }

          return <Icon name={iconName} size={24} color={color} />;
        },
      })}
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        activeTintColor: colors.white,
        inactiveTintColor: colors.whiteTransparent,
        style: {
          backgroundColor: colors.secundary,
        },
      }}>
      <Tab.Screen name="Repositories" component={Repositories} />
      <Tab.Screen name="Organizations" component={Organizations} />
    </Tab.Navigator>
  );
}
