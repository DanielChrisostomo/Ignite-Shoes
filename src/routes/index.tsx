import React from "react"
import { useTheme } from 'native-base';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { OneSignal, NotificationWillDisplayEvent, OSNotification } from 'react-native-onesignal';

import { AppRoutes } from './app.routes';
import { Notification } from "../components/Notification";

export function Routes() {
  const [notification, setNotification] = React.useState<OSNotification>()
  const { colors } = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  React.useEffect(()=> {
    function handleNotification (event: NotificationWillDisplayEvent): void  {
      event.preventDefault()
      const response = event.getNotification()
      console.log(response);
      setNotification(response)
    } 
    console.log("passou aqui fora")

    OneSignal.Notifications.addEventListener("foregroundWillDisplay", handleNotification)

    return () => OneSignal.Notifications.removeEventListener("foregroundWillDisplay", handleNotification)
  },[])


  return (
    <NavigationContainer theme={theme}>
      <AppRoutes />

      {notification?.title && <Notification title={notification.title} onClose={() => setNotification(undefined)} />} 
    </NavigationContainer>
  );
}