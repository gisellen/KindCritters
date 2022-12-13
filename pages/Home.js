import { ImageBackground, StyleSheet, View, Text } from "react-native";
import React from "react";
import Background from "../assets/kindcrittersbg.png";

import ReminderCard from "../components/ReminderCard";

export default function Stats() {
  return (
    <View style={styles.container}>
      
      <ImageBackground resizeMode='cover' source={Background} style={styles.image}>

      </ImageBackground>
      <ImageBackground style={styles.image2}>
      <ReminderCard /></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex: 1,
    justifyContent: 'flex-end'
  },
  image: {

    flex: 1,
    justifyContent: "flex-end",
    height: '100%',
    // position:'absolute',
    width: '100%',
    
  },
  image2: {
    backgroundColor: 'rgba(90,117,44,255)',
    top: -1
  }
});
