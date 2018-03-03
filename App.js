import React from 'react';
import {StatusBar, View} from 'react-native';
import Navigator from "./src/ui/Navigator";
import Colors from "./src/app_assets/colors";

export default class App extends React.Component {
  render() {
    return (
        <View style={{flex: 1}}>
          <StatusBar
              backgroundColor={Colors.colorPrimary}
              barStyle="light-content"
          />
          <Navigator/>
        </View>    );
  }
}