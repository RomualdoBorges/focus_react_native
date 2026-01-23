import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useEffect, useRef, useState } from "react";

export interface Task {
  id: number;
  description: string;
  completed: boolean;
}

interface TaskContextData {
  tasks: Task[];
  addTask: (description: string) => void;
  toggleTaskCompleted: (id: number) => void;
  deleteTask: (id: number) => void;
  updateTask: (id: number, newDescription: string) => void;
}

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext<TaskContextData>(
  {} as TaskContextData,
);

const TASKS_STORAGE_KEY = "fokus-tasks";

export function TaskProvider({ children }: TaskProviderProps) {
  const nextId = useRef(1);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
        const loadedData: Task[] =
          jsonValue != null ? JSON.parse(jsonValue) : [];

        setTasks(loadedData);

        const maxId = loadedData.reduce((acc, t) => Math.max(acc, t.id), 0);
        nextId.current = maxId + 1;

        setIsLoaded(true);
      } catch (e) {
        console.error(e);
        setIsLoaded(true);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const storeData = async (value: Task[]) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(TASKS_STORAGE_KEY, jsonValue);
      } catch (e) {
        console.error(e);
      }
    };

    if (isLoaded) {
      storeData(tasks);
    }
  }, [tasks, isLoaded]);

  const addTask = (description: string) => {
    setTasks((old) => [
      ...old,
      { id: nextId.current++, description, completed: false },
    ]);
    // chamar persistencia
  };

  const toggleTaskCompleted = (id: number) => {
    setTasks((old) =>
      old.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
    // chamar persistencia
  };

  const deleteTask = (id: number) => {
    setTasks((old) => old.filter((task) => task.id !== id));
    // chamar persistencia
  };

  const updateTask = (id: number, newDescription: string) => {
    const desc = newDescription.trim();
    if (!desc) return;

    setTasks((old) =>
      old.map((t) => (t.id === id ? { ...t, description: desc } : t)),
    );
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, toggleTaskCompleted, deleteTask, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
