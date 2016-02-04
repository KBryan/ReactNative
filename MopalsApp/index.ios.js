/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'

var React = require('react-native');
var Home = require('./App/Components/Home');


var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Image,
  TouchableHighlight
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
          component: Home
       }} />
     
     );
  },
});




AppRegistry.registerComponent(Home, () => mainView);
