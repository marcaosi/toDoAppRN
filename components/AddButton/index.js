import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const AddButton = ({ onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
        >
            <Text style={styles.text}>+</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        right: 50,
        bottom: 50,
        width: 70,
        height: 70,
        backgroundColor: "green",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 35
    }
})

export default AddButton