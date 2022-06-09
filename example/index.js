/* Copyright Airship and Contributors */
/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import PreferenceCell from './screens/PreferenceCell';

import {
  EventType,
  UrbanAirship,
} from 'urbanairship-react-native'

import { AirshipChat } from 'urbanairship-chat-react-native'


UrbanAirship.addListener(EventType.PushReceived, async (event) => {
  console.log("Push Received: " + JSON.stringify(event));
})

AirshipChat.setUseCustomChatUI(false);

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(
  'PreferenceCell',
  () => PreferenceCell
);

