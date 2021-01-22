import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/HomeScreen';
import Notification from './src/components/Notification';

export default class App extends React.Component {
  render() {
    return (
      <>
        {/* <Notification /> */}
        <HomeScreen />
      </>
    );
  }
}
