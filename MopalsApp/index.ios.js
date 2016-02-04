/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'

var React = require('react-native')
var CompanyProperty = require('./App/Components/CompanyProperty')
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
      <NavigatorIOS barTintColor='#48BBEC' titleTextColor= "#FFFFFF"
style={styles.navigator} initialRoute={{
        title: 'MopalsApp',
        component: home
      }}/>
); },
});

var home = React.createClass({
   _handleListProperty: function() {
    this.props.navigator.push({
      title: "List Properties",
      component: CompanyProperty
    })
},
  render: function() {
    return (
      <View style={styles.container}>
      <View style={styles.topBox} />
      <View style={styles.bottomBox} />
      <View style={styles.topBox} >
      <TouchableHighlight
      style={styles.button}
      onPress= {this._handleListProperty }
      underlayColor='#99d9f4'
      >
        <Text style={styles.buttonText}>List properties</Text>
     </TouchableHighlight>
     <TouchableHighlight style={styles.button}
       underlayColor='#99d9f4'>
        <Text style={styles.buttonText}>Add House</Text>
    </TouchableHighlight>
    </View>
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
      flexDirection:'column'
    },
    welcome: {
      fontSize:25,
      textAlign:'center'
    },
    navigator: {
      flex:1
    },
    topBox: {
      flex:1,
      backgroundColor:'#CCE5FF'
    },
    bottomBox: {
      flex:1,
      backgroundColor:'#FFFFCC'
    },
    image: {
     width: 70,
     height: 70 
   },button: {
      flex: 1,
      backgroundColor: '#48BBEC',
      borderColor: '#48BBEC',
      borderWidth: 1,
       borderRadius: 8,
      alignSelf: 'stretch',
      justifyContent: 'center',
      margin: 10
    },
      buttonText: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'center'
}
});
AppRegistry.registerComponent('MopalsApp', () => mainView);
