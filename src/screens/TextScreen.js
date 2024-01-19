import React, { useState } from "react";
import {Text, View, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {

    const [inputValue, setInputValue] = useState("");

    return (
        <View>
            <Text>Enter Password: {inputValue}</Text>
            <TextInput 
                style={styles.input}
                autoComplete="off"
                autoCapitalize="none"
                value={inputValue}
                onChangeText={(thisValue) => { setInputValue(thisValue)}}
            />
            { inputValue.length <= 5 ? <Text>Password must be longer than 5 characters.</Text> : null }
            
        </View>
        
    )
}

const styles = StyleSheet.create({
   input: {
    borderWidth:2,
    borderColor: "black",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight:5
   }
});

export default TextScreen;