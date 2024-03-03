import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Preloader from './src/screens/Intro/Intro';
import { NavigationContainer } from '@react-navigation/native';
import {
  PrivateStackNavigator,
  PublicStackNavigator,
  TabNavigator,
} from './src/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BottomBarProvider } from './src/providers/BottomBarProvider';
import './ignore';

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [appReady, setAppReady] = useState(false);

  const prepareApp = async () => {
    // await AsyncStorage.removeItem('countryPartners');
    // await AsyncStorage.removeItem('cityPartners');
    // await AsyncStorage.removeItem('countryInfo');
    // await AsyncStorage.removeItem('cityInfo');

    setTimeout(() => {
      setIsAuth(true);
      setAppReady(true);
    }, 2000);
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await prepareApp();
    };
    checkAuthentication();
  }, []);

  if (!appReady) {
    return <Preloader />;
  } else {
    return (
      <BottomBarProvider>
        <NavigationContainer>
          {isAuth ? <PrivateStackNavigator /> : <PublicStackNavigator />}
        </NavigationContainer>
      </BottomBarProvider>
    );
  }
};

const styles = StyleSheet.create({});

export default App;
