import React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';

const SquareDetail = ({ titleText, colorState, setColorState }) => {
    const buttonColorText = titleText;
    //console.log(props);

    useEffect(() => {
        //console.log('Color State Updated:' + titleText, colorState);
    }, [colorState]);

    const validateRGBValue = (colorValue, operator = 1, addition = 15) => {
        if (colorValue >= 0 && colorValue <= 255) {
            if (operator === -1) {
                if (colorState > 0 && colorState <= 255) {
                    if (colorValue < addition) {
                        return setColorState(colorValue - 1);
                    } else {
                        return setColorState(colorValue + ((Math.floor(Math.random() * addition) + 1) * operator));
                    }
                }
            } else if (operator === 1) {
                if (colorState >= 0 && colorState < 255) {
                    if (colorValue > (255 - addition)) {
                        return setColorState(colorValue + 1);
                    } else {
                        return setColorState(colorValue + ((Math.floor(Math.random() * addition) + 1)));
                    }
                }
            } else {
                console.log("Multiplication operator is not 1 or -1");
            }
        }
    }


    return (
        <View>
            <Text style={styles.headingSize}>{buttonColorText}: {colorState}</Text>
            <View style={styles.parentView}>
                <Pressable
                    style={styles.buttonStyle}
                    onPress={() => {
                        validateRGBValue(colorState);
                    }}
                >
                    <Text style={styles.textSize}>More {buttonColorText}</Text>
                </Pressable>
                <Pressable
                    style={styles.buttonStyle}
                    onPress={() => {
                        validateRGBValue(colorState, -1);
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