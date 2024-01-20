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
      <Button 
        onPress={() => navigation.navigate("Image")}
        title="Go to ImageScreen Demo"
      />
      <Button
        title="Go To Counter Screen Demo"
        onPress={ () => navigation.navigate("Counter") }
      />
      <Button 
        title="Go To Color Screen Demo"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go To Square Screen Demo"
        onPress={() => { navigation.navigate('Square') }}
      />
      <Button
        title="Go To Font Screen Demo"
        onPress={() => { navigation.navigate('Font') }}
      />
      <Button 
        title="Go To Text Input Demo"
        onPress={() => {navigation.navigate('TextInput')}}
      />
       <Button 
        title="Go To Layout Demo"
        onPress={() => {navigation.navigate('Box')}}
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
