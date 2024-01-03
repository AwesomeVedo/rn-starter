import React from 'react';
import { useState } from 'react';
import { Text, Pressable, StyleSheet, View } from 'react-native';
import SquareDetail from '../components/SquareDetail';

const SquareScreen = (props) => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return (
        <View>
            <Text style={styles.titleText}>Adjust Color</Text>
            <SquareDetail titleText="Red" colorState={red} setColorState={setRed} ></SquareDetail>
            <SquareDetail titleText="Green" colorState={green} setColorState={setGreen} ></SquareDetail>
            <SquareDetail titleText="Blue" colorState={blue} setColorState={setBlue}></SquareDetail>
            <View style={styles.colorSquare}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titleText: {
        fontSize:30
    },
    colorSquare: {
        width: '80%',
        height: 100,
    }
});


export default SquareScreen;