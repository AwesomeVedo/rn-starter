import React from "react";
import { Text, StyleSheet, View } from 'react-native';

const name = "Miguel Acevedo";
const ComponentsScreen = () => {


    return (
        <View>
            <Text style={styles.textTitle} >Getting started with native react!</Text>
            <Text style={styles.textSubHeading}>My name is {name}</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    textTitle: {
        fontSize:45
    },
    textSubHeading: {
        fontSize:20
    }
});

export default ComponentsScreen;