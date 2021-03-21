import React, { useState } from 'react'

import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native'
import { useNewTask } from '../../context/NewTask'

const Header = () => {
    const { newTask, setNewTask } = useNewTask()
    const handleText = (value) => {
        setNewTask(value)
    }

    return (
        <>
            <Text style={style.title}>ToDo List App</Text>
            <View style={style.container}>
                <TextInput 
                    value={newTask}
                    style={style.input}
                    onChangeText={handleText}
                />
            </View>
        </>
    )
}



const style = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20
    },
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "center"
    },
    input: {
        borderColor: "#CECECE",
        borderWidth: 1,
        padding: 5,
        width: "60%",
        marginLeft: 20
    },
    addButton: {
        backgroundColor: "green",
        alignSelf: "flex-start",
        padding: 5,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginLeft: 20
    },
    addButtonText: {
        color: "white",
        fontWeight: "bold"
    }
})

export default Header