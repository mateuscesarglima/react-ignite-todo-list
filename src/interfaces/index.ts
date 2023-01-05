import { InputHTMLAttributes } from "react";

export interface IAddTaskInput extends InputHTMLAttributes<HTMLInputElement> {}

export interface ITask {
  id: number;
  content: string;
  isConcluded: boolean;
}
