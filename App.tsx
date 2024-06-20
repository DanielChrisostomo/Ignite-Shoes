import { Platform, StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { OneSignal } from 'react-native-onesignal';

import { Routes } from './src/routes';

import { THEME } from './src/theme';
import { Loading } from './src/components/Loading';

import { CartContextProvider } from './src/contexts/CartContext';
import { tagUserInfoCreate } from './src/notifications/notificationsTags';
import React from 'react';

const oneSignalAppId = Platform.OS === "ios" ? "colocar o apple id aqui" : "4a77bc0f-d9d0-44c9-9da7-572246380a91"

// OneSignal.initialize(oneSignalAppId) trocar pelo initialize aqui em baixo caso tenha o apple ID
OneSignal.initialize("4a77bc0f-d9d0-44c9-9da7-572246380a91")
OneSignal.Notifications.requestPermission(true)

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  // tagUserEmailCreate("rodrigo.goncalces@rocketseat.team")
  // tagUserEmailRemove("rodrigo.goncalces@rocketseat.team")
  tagUserInfoCreate()

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}