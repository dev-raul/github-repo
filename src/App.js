import React, {useEffect, createContext, useMemo} from 'react';
import {View, Text} from 'react-native';
import './config/Reacttotron';
import AsyncStorage from '@react-native-community/async-storage';
import Routes from './routes';
import AuthContext from './services/AuthContext';

import SplashScreen from './components/SplashScreen';

const App = () => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  useEffect(() => {
    async function getUser() {
      const user = await AsyncStorage.getItem('@REPOGIT:user');
      dispatch({type: 'RESTORE_TOKEN', token: user});
    }
    getUser();
  });

  const authContext = useMemo(
    () => ({
      signIn: async data => {
        dispatch({type: 'SIGN_IN', token: data});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
    }),
    [],
  );

  if (state.isLoading) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <Routes userToken={state.userToken} />
    </AuthContext.Provider>
  );
};

export default App;
