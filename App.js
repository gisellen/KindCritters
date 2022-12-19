import * as React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import Home from './pages/Home'
import Creature from './pages/Creature'
import Stats from './pages/Stats'
import Settings from './pages/Settings'

import Background from './assets/kindcrittersbg.png'
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer styles>
      
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home'){
            iconName = focused? 'home' : 'home'
          } else if (route.name === 'Creature'){
            iconName = focused ? 'ios-list' : 'ios-list-outline'
          } else if (route.name ==='Statistics') {
            iconName = focused ? 'stats' : 'stats'
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings'
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey'
      })} >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Creature" component={Creature} />
        <Tab.Screen name="Statistics" component={Stats} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
      </NavigationContainer>
  );
}