import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Account from '../Account/Account';
import Home from '../Home/Home';
import Notification from '../Notification/Notification';
import Save from '../Save/Save';
import DetailTrader from '../Home/DetailTrader';

const Tab = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" size={25} color={tintColor} />
        ),
      },
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        tabBarLabel: 'Notification',
        tabBarIcon: ({tintColor}) => (
          <Icon name="bell" size={20} color={tintColor} />
        ),
      },
    },
    Save: {
      screen: Save,
      navigationOptions: {
        tabBarLabel: 'Save',
        tabBarIcon: ({tintColor}) => (
          <Icon name="clipboard" size={20} color={tintColor} />
        ),
      },
    },
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarLabel: 'Account',
        tabBarIcon: ({tintColor}) => (
          <Icon name="user-circle" size={20} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#F2994A',
      inactiveTintColor: '#CDCDCD',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: {width: 5, height: 3},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
      },
    },
  },
);

const Stack = createStackNavigator(
  {
    Tab: Tab,
    DetailTrader: DetailTrader,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export const ContainerRouterHome = createAppContainer(Stack);
