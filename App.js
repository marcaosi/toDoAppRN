import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native'
import AddButton from './components/AddButton';

import Header from './components/Header'
import ItemList from './components/ItemList'
import TaskListProvider from './context/TaskList'
import NewTaskProvider from './context/NewTask'

import { useTaskList } from './context/TaskList'
import { useNewTask } from './context/NewTask'

const AppContent = () => {
  const { taskList, setTaskList } = useTaskList()
  const { newTask, setNewTask } = useNewTask()

  const addItem = (task) => {
    const newTaskList = [...taskList, newTask]
    setTaskList(newTaskList)
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        <Header/>
        <View>
          <ItemList  />
        </View>
      </ScrollView>
      <AddButton onPress={() => addItem(newTask)}/>
    </SafeAreaView>
  )
}

const App = () => {
  return (
    <TaskListProvider>
      <NewTaskProvider>
        <AppContent />
      </NewTaskProvider>
    </TaskListProvider>
  );
}

export default App
