/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'

var React = require('react-native')
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React;

var mainView = React.createClass({
  render:function() {
    return (
      <NavigatorIOS
        barTintColor='#48BBEC'
        titleTextColor ='#FFFFFF'
        style={styles.navigator}
        initialRoute={{
          title: 'Mopals',
          component: MopalsApp
       }} />
     
     );
  },
});
var Home = React.createClass({
  render:function() {
    return (
      <View style={styles.container}>
          <View style={styles.topBox} />
          <View style={styles.bottomBox} />
      </View>
      );
  }
});
var MopalsApp = React.createClass({
  render:function() {
    return (
          <View style={styles.container}>
            <Text>
             Hello World !!!
            </Text>
            <View style={styles.topBox} />
            <View style={styles.bottomBox} />
          </View>
      );
    }
});
var styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection:'row'
    },
    welcome: {
      fontSize:25,
      textAlign:'center'
    },
    navigator: {
      flex:1
    },
    topBox: {
      flex:2,
      backgroundColor:'#CCE5FF'
    },
    bottomBox: {
      flex:1,
      backgroundColor:'#FFFFCC'
    }
});
AppRegistry.registerComponent('MopalsApp', () => mainView);
