import React, { createContext, useState, useContext } from 'react'

const TaskListContext = createContext();

export default function TaskListProvider({ children }) {
  const [taskList, setTaskList] = useState([]);

  return (
    <TaskListContext.Provider
      value={{
        taskList,
        setTaskList
      }}
    >
      {children}
    </TaskListContext.Provider>
  );
}

export function useTaskList() {
  const context = useContext(TaskListContext);
  if (!context) throw new Error("useTaskList must be used within a taskListProvider");
  const { taskList, setTaskList } = context;
  return { taskList, setTaskList };
}