import { InputHTMLAttributes } from "react";

export interface IAddTaskInput extends InputHTMLAttributes<HTMLInputElement> {}

export interface ITask {
  id: string;
  content: string;
  isConcluded: boolean;
}

export interface IListItem extends ITask {
  deleteTaskHandle: (taskToBeDeleted: string) => void;
}

export interface IMain {
  tasks: ITask[];
  taskDescription: string;
  setTaskDescription: (value: string) => void;
  addTaskHandle: () => void;
  deleteTaskHandle: (taskToBeDeleted: string) => void;
}

export interface ITaskList {
  tasks: ITask[];
  deleteTaskHandle: (taskToBeDeleted: string) => void;
}

export interface IAddTask extends Omit<IMain, "tasks" | "deleteTaskHandle"> {}

export interface IToast {
  type: "success" | "warning" | "error" | "info";
  message: string;
}
