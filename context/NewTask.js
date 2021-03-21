import React, { createContext, useState, useContext } from 'react'

const NewTaskContext = createContext();

export default function NewTaskProvider({ children }) {
  const [newTask, setNewTask] = useState([]);

  return (
    <NewTaskContext.Provider
      value={{
        newTask,
        setNewTask
      }}
    >
      {children}
    </NewTaskContext.Provider>
  );
}

export function useNewTask() {
  const context = useContext(NewTaskContext);
  if (!context) throw new Error("useNewTask must be used within a NewTaskProvider");
  const { newTask, setNewTask } = context;
  return { newTask, setNewTask };
}