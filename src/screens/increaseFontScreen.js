import React, { useReducer } from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';

const reducer = (state, action) => {
    return {...state, fontSize: state.fontSize + action.fontSizeChange};
}

const increaseFontSize = () => {

    const [state, dispatch] = useReducer(reducer, {fontSize:12});

    return (
        <View style={styles.parentView}>
            <Text style={{width: '20%', fontSize: state.fontSize}}>Font Size: {state.fontSize} </Text>
            <Pressable
                style={styles.buttonStyle}
                onPress={() => {
                    dispatch({fontSizeChange:1});
                }}
            
            >
                <Text>Increase</Text>
            </Pressable>
            <Pressable
                style={styles.buttonStyle}
                onPress={() => {
                    dispatch({fontSizeChange:-1});
                }}
            
            >
                <Text>Decrease</Text>
            </Pressable>
        </View>
    )

}

const styles = StyleSheet.create({
    buttonStyle: {
        paddingTop: 15,
        paddingRight: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#777',
        width: '48%',
    },
    parentView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
    },
});

export default increaseFontSize;