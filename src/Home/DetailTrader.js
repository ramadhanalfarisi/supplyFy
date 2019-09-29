//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  Slider,
  Animated,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/FontAwesome';
// create a component
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
class DetailTrader extends Component {
  constructor(props) {
    super(props);
    this.topModal = new Animated.Value(1000);
    this.state = {
      photo: this.props.navigation.state.params.photo,
      name: this.props.navigation.state.params.name,
      address: this.props.navigation.state.params.address,
      rating: this.props.navigation.state.params.rating,
      sliderValue: 0,
      maksValue: 52,
    };
  }
  kembali() {
    this.props.navigation.navigate('Tab');
  }
  munculModal() {
    Animated.spring(this.topModal, {
      toValue: HEIGHT - 550,
      friction: 7,
    }).start();
  }
  closeModal() {
    this.setState({sliderValue: 0});
    this.slider.setNativeProps({value: 0});
    Animated.spring(this.topModal, {
      toValue: 1000,
      friction: 7,
    }).start();
  }
  pesanKomoditas() {
    let komoditas = this.state.maksValue - this.state.sliderValue;
    this.setState({sliderValue: 0, maksValue: komoditas});
    this.slider.setNativeProps({value: 0});
    Animated.spring(this.topModal, {
      toValue: 1000,
      friction: 7,
    }).start();
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Animated.View
          style={{
            zIndex: 1,
            position: 'absolute',
            top: this.topModal,
            right: WIDTH - 335,
          }}>
          <View
            style={{
              width: WIDTH - 50,
              height: HEIGHT - 370,
              backgroundColor: '#fff',
              borderRadius: 30,
              elevation: 3,
            }}>
            <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
              <TouchableOpacity
                onPress={() => this.closeModal()}
                style={{marginLeft: WIDTH - 110, marginTop: 10}}>
                <View>
                  <Icon name="close" size={25} color="grey" />
                </View>
              </TouchableOpacity>
              <View style={{paddingVertical: 10}}>
                <Text
                  style={{fontSize: 20, fontWeight: '700', color: '#707070'}}>
                  Jumlah Komoditas
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#9B9B9B',
                    paddingTop: 5,
                  }}>
                  Jagung
                </Text>
              </View>
              <View style={{paddingVertical: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '500',
                      color: '#9B9B9B',
                      paddingTop: 5,
                    }}>
                    Harga Per Ton
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '500',
                      color: '#9B9B9B',
                      paddingTop: 5,
                    }}>
                    Rp. 600.000
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '500',
                      color: '#9B9B9B',
                      paddingTop: 5,
                    }}>
                    Jumlah Tersedia
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '500',
                      color: '#9B9B9B',
                      paddingTop: 5,
                    }}>
                    {this.state.maksValue} Ton
                  </Text>
                </View>
              </View>
              <View style={{paddingVertical: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{fontSize: 18, fontWeight: '500', color: '#707070'}}>
                    Jumlah Dipesan
                  </Text>
                  <Text
                    style={{fontSize: 18, fontWeight: '500', color: '#707070'}}>
                    {this.state.sliderValue} Ton
                  </Text>
                </View>
              </View>
              <View style={{paddingVertical: 10}}>
                <Slider
                  ref={ref => {
                    this.slider = ref;
                  }}
                  step={1}
                  minimumValue={0}
                  maximumValue={this.state.maksValue}
                  minimumTrackTintColor="#009688"
                  onValueChange={ChangedValue =>
                    this.setState({sliderValue: ChangedValue})
                  }
                  style={{width: '100%'}}
                />
              </View>
              <View style={{paddingVertical: 20}}>
                <TouchableOpacity
                  style={{backgroundColor: '#F2994A', borderRadius: 5}}
                  onPress={() => this.pesanKomoditas()}>
                  <View
                    style={{
                      width: '100%',
                      height: HEIGHT - 670,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: '#fff'}}>
                      MASUKKAN JUMLAH KOMODITAS
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Animated.View>

        <View style={{flex: 1}}>
          <View>
            <View style={{height: HEIGHT - 130}}>
              <ScrollView scrollEventThrottle={16}>
                <View style={{width: WIDTH, height: HEIGHT - 460}}>
                  <TouchableOpacity
                    onPress={() => this.kembali()}
                    style={{
                      position: 'absolute',
                      zIndex: 1,
                      top: 30,
                      left: 15,
                    }}>
                    <View style={{width: 18, height: 9}}>
                      <Image
                        source={require('../../Assets/DropDown.png')}
                        style={{
                          height: null,
                          width: null,
                          flex: 1,
                          resizeMode: 'contain',
                          transform: [{rotate: '90deg'}],
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                  <Image
                    source={this.state.photo}
                    style={{
                      flex: 1,
                      width: null,
                      height: null,
                    }}
                  />
                </View>
                <View style={{paddingHorizontal: 20}}>
                  <View style={{paddingVertical: 15, paddingTop: 20}}>
                    <Text
                      style={{
                        color: '#707070',
                        fontSize: 18,
                        fontWeight: '500',
                      }}>
                      {this.state.name}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        paddingTop: 10,
                        alignItems: 'center',
                      }}>
                      <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={this.state.rating}
                        emptyStar={'ios-star-outline'}
                        fullStar={'ios-star'}
                        halfStar={'ios-star-half'}
                        iconSet={'Ionicons'}
                        fullStarColor={'#F2994A'}
                        starSize={20}
                        starStyle={{paddingRight: 3}}
                      />
                      <Text
                        style={{
                          color: '#9B9B9B',
                          fontSize: 15,
                          paddingLeft: 10,
                        }}>
                        {this.state.rating} Star (35 Reviews)
                      </Text>
                    </View>
                  </View>
                  <View style={{paddingVertical: 15}}>
                    <Text
                      style={{
                        color: '#707070',
                        fontSize: 18,
                        fontWeight: '500',
                      }}>
                      Location
                    </Text>
                    <View
                      style={{
                        paddingTop: 10,
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: '#9B9B9B', fontSize: 16}}>
                        {this.state.address}
                      </Text>
                    </View>
                  </View>
                  <View style={{paddingVertical: 15}}>
                    <Text
                      style={{
                        color: '#707070',
                        fontSize: 18,
                        fontWeight: '500',
                      }}>
                      Description
                    </Text>
                    <View
                      style={{
                        paddingTop: 10,
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: '#9B9B9B', fontSize: 16}}>
                        Clean, stock and supply designated facility areas
                        (dusting, sweeping, vacuuming, mopping)
                      </Text>
                    </View>
                  </View>
                  <View style={{paddingVertical: 15}}>
                    <Text
                      style={{
                        color: '#707070',
                        fontSize: 18,
                        fontWeight: '500',
                      }}>
                      Comodity
                    </Text>
                    <View
                      style={{
                        paddingTop: 10,
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: '#9B9B9B', fontSize: 16}}>
                        Fried, Corn, Bean
                      </Text>
                    </View>
                  </View>
                  <View style={{paddingVertical: 15}}>
                    <Text
                      style={{
                        color: '#707070',
                        fontSize: 18,
                        fontWeight: '500',
                      }}>
                      Frequency
                    </Text>
                    <View
                      style={{
                        paddingTop: 10,
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: '#9B9B9B', fontSize: 16}}>
                        550 / 1000 kg (55%)
                      </Text>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: '#fff',
                width: WIDTH,
                height: HEIGHT - 610,
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,
                position: 'absolute',
                top: HEIGHT - 130,
              }}>
              <TouchableOpacity
                style={{backgroundColor: '#F2994A', borderRadius: 5}}
                onPress={() => this.munculModal()}>
                <View
                  style={{
                    width: WIDTH - 50,
                    height: HEIGHT - 660,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: '#fff'}}>MASUKKAN JUMLAH KOMODITAS</Text>
                </View>
              </TouchableOpacity>
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
    backgroundColor: '#F2F2F2',
  },
});

//make this component available to the app
export default DetailTrader;
