import React from 'react-native'
import {Text,StyleSheet} from 'react-native'

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};