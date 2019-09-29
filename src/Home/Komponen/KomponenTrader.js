//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import StarRating from 'react-native-star-rating';
// create a component
const WIDTH = Dimensions.get('window').width;
class KomponenTrader extends Component {
  render() {
    return (
      <SafeAreaView style={{alignItems: 'center'}}>
        <View
          style={{
            paddingHorizontal: 5,
            paddingVertical: 5,
            justifyContent: 'center',
            borderRadius: 10,
            marginTop: 20,
            backgroundColor: '#fff',
            width: WIDTH - 50,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{width: 80, height: 80}}>
              <Image
                source={this.props.image}
                style={{
                  height: null,
                  width: null,
                  flex: 1,
                  borderRadius: 5,
                }}
              />
            </View>
            <View style={{paddingLeft: 10}}>
              <Text style={{color: '#707070', fontSize: 15}}>
                {this.props.name}
              </Text>
              <Text style={{color: '#9B9B9B', fontSize: 12, paddingTop: 5}}>
                {this.props.address}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingTop: 5,
                }}>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={this.props.rating}
                  emptyStar={'ios-star-outline'}
                  fullStar={'ios-star'}
                  halfStar={'ios-star-half'}
                  iconSet={'Ionicons'}
                  fullStarColor={'#F2994A'}
                  starSize={17}
                />
                <Text style={{color: '#F2994A', fontSize: 12, paddingLeft: 5}}>
                  {this.props.rating}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
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
export default KomponenTrader;
