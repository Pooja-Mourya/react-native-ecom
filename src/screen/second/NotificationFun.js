import React from 'react';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    notificationToken();
  }
}

const notificationToken = async () => {
  //   const fcmToken = await AsyncStorage.getItem('fcmToken', );
  //   if (!fcmToken) {
  try {
    const haveToken = await messaging().getToken();
    // .then(token => console.log('token', token))
    console.log('old fcmToken', haveToken);
    if (haveToken) {
      console.log('new generated token successfully', haveToken);
      await AsyncStorage.setItem('fcmToken', haveToken);
    }
  } catch (error) {
    console.log('error', error);
  }
  //   }
};

export const notificationServices = () => {
  messaging().onMessage(remoteMessage => {
    Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  });

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
    navigation.navigate(remoteMessage.data.type);
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
        setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
      }
    });
};
