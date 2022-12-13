import * as React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from './pages/Home'
import Creature from './pages/Creature'
import Stats from './pages/Stats'
import Settings from './pages/Settings'

import Background from './assets/kindcrittersbg.png'
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer styles>
      
      <Tab.Navigator screenOptions={{
        
      }} >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Creature" component={Creature} />
        <Tab.Screen name="Statistics" component={Stats} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
      </NavigationContainer>
  );
}