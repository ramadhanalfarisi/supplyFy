//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
  TouchableHighlight,
} from 'react-native';
import down from '../../Assets/DropDown.png';
import Komponen from './Komponen/Komponen';
import KomponenTrader from './Komponen/KomponenTrader';
import * as Animatable from 'react-native-animatable';

// create a component
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
class Home extends Component {
  constructor() {
    super();
    this.heightDropDown = new Animated.Value(0);
    this.rotationIcon = new Animated.Value(0);
  }
  kembali() {
    this.setState({gantiTampil: false});
  }
  viewMore() {
    this.setState({gantiTampil: true});
  }
  detailTrader(photo, name, lokasi, rating) {
    this.props.navigation.navigate('DetailTrader', {
      photo: photo,
      name: name,
      address: lokasi,
      rating: rating,
    });
  }
  dropDown() {
    this.setState({
      dropdown: true,
      disabledViewmore: true,
    });
    Animated.parallel([
      Animated.spring(this.heightDropDown, {
        toValue: HEIGHT - 550,
        friction: 10,
      }),
      Animated.spring(this.rotationIcon, {
        toValue: 1,
        friction: 8,
      }),
    ]).start();
  }
  dropUp() {
    this.setState({
      dropdown: false,
      disabledViewmore: false,
    });
    Animated.parallel([
      Animated.spring(this.heightDropDown, {
        toValue: 0,
        friction: 10,
      }),
      Animated.spring(this.rotationIcon, {
        toValue: 0,
        friction: 8,
      }),
    ]).start();
  }
  selectLoc(loc) {
    this.setState({
      dropdown: false,
      textLokasi: loc,
      disabledViewmore: false,
    });
    Animated.parallel([
      Animated.spring(this.heightDropDown, {
        toValue: 0,
        friction: 10,
      }),
      Animated.spring(this.rotationIcon, {
        toValue: 0,
        friction: 8,
      }),
    ]).start();
  }
  state = {
    data: [
      {
        value: 'Yogyakarta',
      },
      {
        value: 'Malang',
      },
      {
        value: 'Surabaya',
      },
      {
        value: 'Banyuwangi',
      },
      {
        value: 'Kediri',
      },
      {
        value: 'Jakarta',
      },
    ],
    textLokasi: 'Pilih Area',
    dropdown: false,
    disabledViewmore: false,
    gantiTampil: false,
    trader: [
      {
        photo: require('../../Assets/pabrik.jpg'),
        name: 'Supplier Berkah Makmur Abadi',
        address: 'Jl. Raymond Shells No.12, Malang',
        rating: 4.1,
      },
      {
        photo: require('../../Assets/pabrik.jpg'),
        name: 'Supplier Berkah Makmur Abadi',
        address: 'Jl. Raymond Shells No.12, Malang',
        rating: 4.1,
      },
      {
        photo: require('../../Assets/pabrik.jpg'),
        name: 'Supplier Berkah Makmur Abadi',
        address: 'Jl. Raymond Shells No.12, Malang',
        rating: 4.1,
      },
      {
        photo: require('../../Assets/pabrik.jpg'),
        name: 'Supplier Berkah Makmur Abadi',
        address: 'Jl. Raymond Shells No.12, Malang',
        rating: 4.1,
      },
      {
        photo: require('../../Assets/pabrik.jpg'),
        name: 'Supplier Berkah Makmur Abadi',
        address: 'Jl. Raymond Shells No.12, Malang',
        rating: 4.1,
      },
    ],
  };
  render() {
    const rotation = this.rotationIcon.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    });
    {
      if (this.state.gantiTampil === false) {
        return (
          <SafeAreaView style={styles.container}>
            <View
              style={{
                flex: 1,
                height: HEIGHT - 420,
                width: WIDTH,
                backgroundColor: '#46AE9F',
                borderBottomRightRadius: 40,
                borderBottomLeftRadius: 40,
                position: 'absolute',
                zIndex: 0,
              }}>
              <View
                style={{
                  height: HEIGHT - 680,
                  width: WIDTH,
                  backgroundColor: 'rgba(255, 255, 255, 0.4)',
                }}
              />
            </View>
            <ScrollView>
              <Animatable.View
                animation="slideInDown"
                style={{
                  marginHorizontal: 30,
                  borderBottomWidth: 1,
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  paddingBottom: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 50,
                    paddingHorizontal: 30,
                  }}>
                  <View style={{marginTop: 10}}>
                    <Image
                      source={require('../../Assets/Loc.png')}
                      style={{height: 20, width: 15}}
                    />
                  </View>
                  <View style={{paddingLeft: 20}}>
                    <Text style={{color: '#fff', fontWeight: '50'}}>
                      Area Pengiriman
                    </Text>
                    <View
                      style={{
                        marginTop: 5,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 17,
                          fontWeight: '700',
                          width: 200,
                        }}>
                        {this.state.textLokasi}
                      </Text>
                      <TouchableOpacity
                        onPress={() =>
                          this.state.dropdown === false
                            ? this.dropDown()
                            : this.dropUp()
                        }>
                        <Animated.Image
                          source={down}
                          style={{
                            width: 18,
                            height: 9,
                            transform: [{rotate: rotation}],
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Animatable.View>
              <Animated.View
                style={{
                  width: WIDTH - 100,
                  height: this.heightDropDown, //HEIGHT - 550
                  backgroundColor: '#fff',
                  marginLeft: 80,
                  position: 'absolute',
                  paddingHorizontal: 10,
                  zIndex: 1,
                  top: 103,
                  overflow: 'hidden',
                }}>
                <ScrollView scrollEventThrottle={16}>
                  <FlatList
                    data={this.state.data}
                    style={{paddingBottom: 10}}
                    renderItem={value => {
                      return (
                        <TouchableHighlight
                          onPress={() => this.selectLoc(value.item.value)}>
                          <View
                            style={{
                              borderBottomWidth: 1,
                              borderBottomColor: '#46AE9F',
                              paddingHorizontal: 10,
                              paddingVertical: 5,
                            }}>
                            <Text
                              style={{
                                color: '#46AE9F',
                                fontSize: 17,
                                fontWeight: '300',
                                paddingVertical: 5,
                              }}>
                              {value.item.value}
                            </Text>
                          </View>
                        </TouchableHighlight>
                      );
                    }}
                  />
                </ScrollView>
              </Animated.View>
              <Animatable.View
                style={{alignItems: 'center', paddingTop: 30, flex: 1}}
                animation="slideInLeft">
                <View
                  style={{
                    width: WIDTH - 60,
                    height: 50,
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                  }}>
                  <Image
                    source={require('../../Assets/Union.png')}
                    style={{width: 20, height: 20}}
                  />
                  <TextInput
                    placeholder="Cari Supply, Trader, Rating..."
                    placeholderTextColor="rgba(0, 0, 0, 0.2)"
                    underlineColorAndroid="transparent"
                    keyboardType="default"
                    style={{
                      height: 50,
                      width: WIDTH - 100,
                      paddingLeft: 10,
                      color: '#46AE9F',
                    }}
                  />
                </View>
              </Animatable.View>
              <Animatable.View
                style={{paddingHorizontal: 10}}
                animation="slideInRight">
                <View style={{marginTop: 30}}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <Komponen
                      image={require('../../Assets/Produk.png')}
                      name="Jagung"
                    />
                    <Komponen
                      image={require('../../Assets/Produk.png')}
                      name="Jagung"
                    />
                    <Komponen
                      image={require('../../Assets/Produk.png')}
                      name="Jagung"
                    />
                    <Komponen
                      image={require('../../Assets/Produk.png')}
                      name="Jagung"
                    />
                  </ScrollView>
                </View>
              </Animatable.View>
              <Animatable.View
                animation="slideInUp"
                style={{paddingVertical: 10}}>
                <View
                  style={{
                    paddingHorizontal: 30,
                    marginTop: 30,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View style={{width: WIDTH - 130}}>
                    <Text style={{color: '#444444', fontSize: 17}}>
                      Trader Terdekat
                    </Text>
                  </View>

                  <TouchableOpacity
                    onPress={() => this.viewMore()}
                    disabled={this.state.disabledViewmore}>
                    <Text style={{color: '#F2994A'}}>View more</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <FlatList
                    data={this.state.trader}
                    keyExtractor={(item, index) => index}
                    renderItem={item => {
                      return (
                        <TouchableHighlight
                          onPress={() =>
                            this.detailTrader(
                              item.item.photo,
                              item.item.name,
                              item.item.address,
                              item.item.rating,
                            )
                          }>
                          <KomponenTrader
                            image={item.item.photo}
                            name={item.item.name}
                            address={item.item.address}
                            rating={item.item.rating}
                          />
                        </TouchableHighlight>
                      );
                    }}
                  />
                </View>
              </Animatable.View>
            </ScrollView>
          </SafeAreaView>
        );
      } else {
        return (
          <SafeAreaView style={styles.container}>
            <View style={{flex: 1}}>
              <View
                style={{
                  paddingHorizontal: 10,
                  width: WIDTH,
                  height: 50,
                  backgroundColor: '#46AE9F',
                  flexDirection: 'row',
                  alignItems: 'center',
                  position: 'absolute',
                  zIndex: 1,
                }}>
                <TouchableOpacity onPress={() => this.kembali()}>
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
                <Text style={{fontSize: 15, color: '#fff', paddingLeft: 10}}>
                  Trader Terdekat
                </Text>
              </View>
              <Animatable.View
                animation="slideInUp"
                style={{paddingHorizontal: 10, marginTop: 50}}>
                <ScrollView scrollEventThrottle={16}>
                  <FlatList
                    data={this.state.trader}
                    keyExtractor={(item, index) => index}
                    renderItem={item => {
                      return (
                        <TouchableHighlight
                          onPress={() =>
                            this.detailTrader(
                              item.item.photo,
                              item.item.name,
                              item.item.address,
                              item.item.rating,
                            )
                          }>
                          <KomponenTrader
                            image={item.item.photo}
                            name={item.item.name}
                            address={item.item.address}
                            rating={item.item.rating}
                          />
                        </TouchableHighlight>
                      );
                    }}
                  />
                </ScrollView>
              </Animatable.View>
            </View>
          </SafeAreaView>
        );
      }
    }
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
export default Home;
