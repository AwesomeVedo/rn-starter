import React, { useState, useReducer } from 'react';
import { Text, View, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
    return {...state, counter: state.counter + action.counterChange};
}

const CounterScreen = () => {
    //const [counter, setCounter] = useState(0);
   
    const [state, dispatch] = useReducer(reducer, {counter:0});

    return (
        <View>
            <Button
                title="Increase"
                onPress={() => {
                    //setCounter(counter + 1)
                    dispatch({counterChange:1});
                }}
            />
            <Button 
                title="Decrease"
                onPress={() => {
                    //setCounter(counter - 1)
                    dispatch({counterChange:-1});
                }}
            />
            <Text>Current Count: {state.counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default CounterScreen;