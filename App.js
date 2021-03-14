import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native'

import Header from './components/Header'
import ItemList from './components/ItemList';
import TaskListProvider from './context/TaskList';

const App = () => {

  return (
    <TaskListProvider>
      <SafeAreaView>
        <StatusBar barStyle={'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
          <Header/>
          <View>
            <ItemList  />
          </View>
        </ScrollView>
      </SafeAreaView>
    </TaskListProvider>
  );
}

export default App
