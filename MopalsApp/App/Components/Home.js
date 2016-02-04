'use strict';


var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Image,
  TouchableHighlight
} = React;


var Home = React.createClass({

  _handleCompanyProperty:function() {
    console.log('Button Clicked');
  },
  render:function() {
    return (
          <View style={styles.container}>
          <View style={styles.topBox} />
          <View style={styles.bottomBox} />

         <View style={styles.topBox}>
         <TouchableHighlight style={styles.button}
         onPress={ this._handleCompanyProperty }
         underlayColor='#99d9f4'>

         <Text style={styles.buttonText}>Company Properties</Text>
         </TouchableHighlight>
         <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
         <Text style={styles.buttonText}>Add Company</Text>
         </TouchableHighlight>
          </View>
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
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#FFFFCC'
    },
    image: {
      width:70,
      height:70
    },
     button: {
      flex:1,
      backgroundColor:'#48BBEC',
      borderColor:'#48BBEC',
      borderWidth:1,
      borderRadius:8,
      alignSelf:'stretch',
      justifyContent:'center',
      margin:10
    },
     buttonText: {
      fontSize:18,
      color:'white',
      alignSelf:'center'
    }
});
AppRegistry.registerComponent('Home', () => Home);
