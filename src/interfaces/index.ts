import { InputHTMLAttributes } from "react";

export interface IAddTaskInput extends InputHTMLAttributes<HTMLInputElement> {}

export interface ITask {
  id: string;
  content: string;
  isConcluded: boolean;
}

export interface IMain {
  tasks: ITask[];
  taskDescription: string;
  setTaskDescription: (value: string) => void;
  addTaskHandle: () => void;
}

export interface ITaskList {
  tasks: ITask[];
}

export interface IAddTask extends Omit<IMain, "tasks"> {}
