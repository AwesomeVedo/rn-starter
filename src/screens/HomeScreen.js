import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Getting started with React Native</Text>
      <Button 
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button 
        onPress={() => navigation.navigate("List")}
        title="Go to List Demo"
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttonStyle: {
    borderWidth:2,
    borderColor:'red',
    padding:10
  }
});

export default HomeScreen;
