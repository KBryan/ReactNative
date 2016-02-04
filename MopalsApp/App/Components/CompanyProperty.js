var React = require('react-native');

var {
	Image,
	StyleSheet,
	Text,
	View
} = React;
var MOCK_DATA = [
				{name:'Kwame Bryan',address:'27 Kersey Cres',images:{thumbnail:'http://hmp.me/ol5'}},
];
var CompanyProperty = React.createClass({
	render:function() {
		var property = MOCK_DATA[0]
		return (
			<View style={styles.container}>
			<Image
			  style ={styles.thumbnail}
			  source={{uri: property.images.thumbnail}} />
			  <View style={styles.rightContainer} >
			  <Text style={styles.name}>{property.name}</Text>
			  <Text style={styles.address}>{property.address}</Text>
			  </View>
			  </View>
		 );
	}
});
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
	width: 53,
    height: 81,
  	},
  	rightContainer: {
    flex: 1,
	}, 
	name: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
	}, 
	address: {
    textAlign: 'center',
  },
});
module.exports = CompanyProperty;