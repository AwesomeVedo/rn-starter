import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        <View>
            <Text>Using margin</Text>
            <View style={styles.parentBox}>
                <View style={styles.childBox}></View>    
                <View style={[styles.childBox, {marginTop: 100}]}></View>
                <View style={styles.childBox}></View> 
            </View>
            <Text>Using flex</Text>
            <View style={styles.parentBox}>
                <View style={styles.childBox}></View>    
                <View style={styles.childBox}></View> 
            </View>
            <View style={[styles.parentBox, {justifyContent: 'center'}]}>
                <View style={styles.childBox}></View>    
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parentBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    childBox: {
        height:100,
        width:100,
        borderWidth:1,
    }
});

export default BoxScreen;