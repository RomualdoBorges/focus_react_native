import { createContext, ReactNode, useState } from "react";

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
}

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext<TaskContextData>(
  {} as TaskContextData,
);

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (description: string) => {
    console.log("tarefa vai ser adicionada");
    setTasks((oldState) => [
      ...oldState,
      {
        id: oldState.length + 1,
        description,
        completed: false,
      },
    ]);
  };

  const toggleTaskCompleted = (id: number) => {
    setTasks((oldState) =>
      oldState.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id: number) => {
    setTasks((oldState) => oldState.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, toggleTaskCompleted, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
