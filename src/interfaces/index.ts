import { InputHTMLAttributes } from "react";

export interface IAddTaskInput extends InputHTMLAttributes<HTMLInputElement> {}

export interface ITask {
  id: string;
  content: string;
  isConcluded: boolean;
}

export interface IMain {
  tasks: ITask[];
}

export interface ITaskList extends IMain {}
