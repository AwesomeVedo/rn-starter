import React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';

const SquareDetail = ({ titleText, colorState, setColorState }) => {
    const buttonColorText = titleText;
    //console.log(props);

    useEffect(() => {
        //console.log('Color State Updated:' + titleText, colorState);
    }, [colorState]);

    const doIncrements = (num, multiplier = 10) => {
        let numToReturn;
        if (num > (255 - multiplier) ) {
            numToReturn = 1;
        } else {
            numToReturn = Math.floor(Math.random() * multiplier) + 1;
        }
        return numToReturn;
    }

    const doDecrements = (num, multiplier = 10) => {
        let numToReturn;
        if (num < multiplier) {
            numToReturn = 1;
        } else {
            numToReturn = Math.floor(Math.random() * multiplier) + 1;
        }
        return numToReturn;
    }


    return (
        <View>
            <Text style={styles.headingSize}>{buttonColorText}: {colorState}</Text>
            <View style={styles.parentView}>
                <Pressable
                    style={styles.buttonStyle}
                    onPress={() => {
                        if (colorState >= 0 && colorState < 255) {
                            setColorState(colorState + doIncrements(colorState));
                        }
                    }}
                >
                    <Text style={styles.textSize}>More {buttonColorText}</Text>
                </Pressable>
                <Pressable
                    style={styles.buttonStyle}
                    onPress={() => {
                        if (colorState > 0 && colorState <= 255) {
                            setColorState(colorState - doDecrements(colorState))
                        }
                    }}
                >
                    <Text style={styles.textSize}>Less {buttonColorText}</Text>
                </Pressable>
            </View>
        </View>
    )

}



const styles = StyleSheet.create({
    squareStyle: {
        height: 100,
        width: 100,
    },

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
    textSize: {
        fontSize: 15,
    },

    headingSize: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    parentView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
    },
});

export default SquareDetail;