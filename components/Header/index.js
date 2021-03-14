import React, { useState } from 'react'

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'

import { useTaskList } from '../../context/TaskList'

const Header = () => {
    const [newTask, setNewTask] = useState("Add a new task")
    const { taskList, setTaskList } = useTaskList()
    const handleText = (value) => {
        setNewTask(value)
    }

    const addItem = (item) => {
        const newTaskList = [...taskList, item]
        setTaskList(newTaskList)
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
                <TouchableOpacity
                    style={style.addButton}
                    onPress={() => addItem(newTask)}
                >
                    <Text style={style.addButtonText}>Add</Text>
                </TouchableOpacity>
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