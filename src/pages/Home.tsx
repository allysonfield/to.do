import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Splash } from '../components/Splash';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';



export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  function handleAddTask(newTaskTitle: string) {
    const data = {
      id: String(new Date().getTime()),
      title: newTaskTitle,
    }
   newTaskTitle !== '' && setTasks(old => [...old, data])
  }

  function handleToggleTaskDone(index: number) {
    const aux = tasks;
    aux[index].done = !aux[index].done;
    setTasks([...tasks])
    //TODO - toggle task done if exists
  }

  function handleRemoveTask(id: string) {
    setTasks(old => old.filter(item => item.id !== id))
    //TODO - remove task from state
  }

  useEffect(() => {
setTimeout(() => {
  setLoading(false)
}, 2000);
  },[])
  return (
    <View style={styles.container}>
      {loading && <Splash />}
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})