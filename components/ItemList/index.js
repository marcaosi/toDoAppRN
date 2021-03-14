import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { useTaskList } from '../../context/TaskList'

const ItemList = () => {
    const { taskList, setTaskList } = useTaskList()
    
    const deleteItem = (i) => {
        const newTaskList = taskList.filter((item, index) => index != i)
        setTaskList(newTaskList)
    }

    const totalItems = taskList.length
    return (
        <View style={styles.container}>
            <Text style={styles.totalItems}>Total: {totalItems} Items</Text>
            {
                taskList.map((item, index) => (
                    <View style={styles.item}>
                        <Text>{index + 1} - {item}</Text>
                        <TouchableOpacity onPress={
                            () => deleteItem(index)
                        }>
                            <Text style={styles.deleteItem}>Excluir</Text>
                        </TouchableOpacity>
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    item: {
        borderBottomColor: "#CECECE",
        borderBottomWidth: 1,
        marginBottom: 20,
        padding: 10,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    deleteItem: {
        color: 'red',
        fontWeight: 'bold'
    },
    totalItems: {
        padding: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})


export default ItemList