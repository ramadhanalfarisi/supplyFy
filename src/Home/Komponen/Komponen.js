//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// create a component
class Komponen extends Component {
  render() {
    return (
      <View
        style={{
          width: 110,
          height: 130,
          backgroundColor: '#fff',
          borderRadius: 10,
          marginLeft: 20,
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <View style={{width: 90, height: 90, paddingVertical: 10}}>
            <Image
              source={this.props.image} //require('../../Assets/Produk.png')
              style={{
                flex: 1,
                height: null,
                width: null,
                resizeMode: 'contain',
              }}
            />
          </View>
          <Text style={{color: 'rgba(0, 0, 0, 0.3)', fontSize: 15}}>
            {this.props.name}
          </Text>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Komponen;
