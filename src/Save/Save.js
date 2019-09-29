//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
class Save extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Save</Text>
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
export default Save;
