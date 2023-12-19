import React from "react";
import { Text, StyleSheet, View } from 'react-native';

const name = "Miguel";
const ComponentsScreen = () => {


    return (
        <View>
            <Text style={styles.textTitle} >Getting started with native react!</Text>
            <Text style={styles.textDefault}>My name is {name}</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    textTitle: {
        fontSize:45
    },
    textDefault: {
        fontSize:20
    }
});

export default ComponentsScreen;