//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

// create a component
class Account extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Account</Text>
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
    backgroundColor: '#E5E5E5',
  },
});

//make this component available to the app
export default Account;
