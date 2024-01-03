import React from 'react';
import { View, StyleSheet, Button, FlatList, Pressable, Text } from 'react-native';
import { useState } from 'react';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    
    const deleteBox = (item) => {
        setColors(colors.filter(color => color !== item))
    }

    return (
        <View>
            <View style={styles.buttonSpacing}>
                <Button
                    title="Add a Color"
                    onPress={() => {
                        setColors([...colors, randomColor()])
                    }}
                />
            </View>
            <View style={styles.buttonSpacing}>
                <Button
                    title="Remove Last Color"
                    onPress={() => {
                        setColors(colors.slice(0, -1));
                    }}
                />
            </View>
            <View style={styles.buttonSpacing}>
                <Button
                    title="Clear All"
                    onPress={() => {
                        setColors([])
                    }}
                />
            </View>
            <FlatList
                keyExtractor={ item => item }
                data={ colors }
                renderItem={({item})  => {
                    return (
                        <Pressable style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}
                            onPress={() => {deleteBox(item)}}
                            >
                            <View style={{ height: 100, width: 100, backgroundColor: item }}></View>
                        </Pressable>
                    );
                }}
            />
        </View>
    )
    
}

const styles = StyleSheet.create({
    buttonSpacing: {
        paddingTop:5,
        paddingBottom:5
    }
});

const randomColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red},${green},${blue})`;
}



export default ColorScreen;