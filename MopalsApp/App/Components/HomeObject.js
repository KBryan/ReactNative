var React = require('react-native');
var CompanyProperty = require('./CompanyProperty')

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Image,
  TouchableHighlight
} = React;


var HomeObject = React.createClass({

  _handleCompanyProperty:function() {
    navigator.push({
    	title:"Company Properties",
    	component:CompanyProperty
    })
  },
  render:function() {
    return (
          <View style={styles.container}>
           <View style={styles.topBox} >
        </View> 
       <View style={styles.bottomBox} >
            <Image source={require('image!magicarp')} style={styles.image}/>
    </View>
      <View style={styles.topBox} >
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
AppRegistry.registerComponent('HomeObject', () => HomeObject);
