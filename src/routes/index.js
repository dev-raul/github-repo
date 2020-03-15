import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PropTypes from 'prop-types';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import Home from './Home.routes';

const Stack = createStackNavigator();

const Routes = ({userToken = false}) => (
  <NavigationContainer>
    <Stack.Navigator>
      {userToken == null ? (
        <Stack.Screen
          name="Welcome"
          options={{headerShown: false}}
          component={Welcome}
        />
      ) : (
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
      )}
    </Stack.Navigator>
  </NavigationContainer>
);
Routes.propTypes = {
  userToken: PropTypes.string,
};
export default Routes;
