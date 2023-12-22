import React from "react";
import { Text, StyleSheet, View, FlatList} from "react-native";

const ListScreen = () => {
const friends = [
    { name: 'friend #1', age: 28},
    { name: 'friend #2', age: 27},
    { name: 'friend #3', age: 24},
    { name: 'friend #4', age: 28},
    { name: 'friend #5', age: 35},
    { name: 'friend #6', age: 22},
    { name: 'friend #7', age: 74},
    { name: 'friend #8', age: 43},
    { name: 'friend #9', age: 30},
];
    return (
        <FlatList
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} – Age {item.age}</Text>
            } }
        />
    );

    

}
const styles = StyleSheet.create({

    textStyle: {
        marginVertical: 10
    }

});

export default ListScreen;