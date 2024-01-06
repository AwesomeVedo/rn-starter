import React from 'react';
import { useState } from 'react';
import { Text, Pressable, StyleSheet, View } from 'react-native';
import SquareDetail from '../components/SquareDetail';

const SquareScreen = (props) => {
    //console.log(props);
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return (
        <View>
            <Text style={styles.titleText}>Adjust Color</Text>
            <SquareDetail titleText="Red" colorState={red} setColorState={setRed} />
            <SquareDetail titleText="Green" colorState={green} setColorState={setGreen} />
            <SquareDetail titleText="Blue" colorState={blue} setColorState={setBlue} />
            <View style={[styles.colorSquare, {backgroundColor: `rgb(${red},${green},${blue})`}]}>

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
        height: 200,
        alignSelf: 'center',
    }
});


export default SquareScreen;