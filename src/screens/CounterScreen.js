import React, { useState, useReducer } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from "react-native";



const CounterScreen = () => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'INCREASE': return {...state, count: state.count + state.step};
            case 'DECREASE': return {...state, count: state.count - state.step};
            case 'SET_STEP': return !isNaN(action.inputNumber) ? {...state, step: action.inputNumber} : {...state, step:1};
            default: return {...state, step:1};
            break;
        }
    }

    const [state, dispatch] = useReducer(reducer, {count:1, step:1});

    return (
        <View>
            <Button
                title="Increase"
                onPress={() => {
                    dispatch({type: 'INCREASE'});
                }}
            />
            <Button 
                title="Decrease"
                onPress={() => {
                    dispatch({type: 'DECREASE'});
                }}
            />
            <Text>Set Step</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                //value={state.count}
                onChangeText={(thisValue) => {
                    // console.log(parseInt(thisValue));
                    dispatch({type: 'SET_STEP', inputNumber: parseInt(thisValue)});
                }}
            ></TextInput>
            <Text>Current Count: {state.count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});

export default CounterScreen;