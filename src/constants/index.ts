import { ITask } from "@interfaces/index";

export const Task: ITask[] = [
  { id: crypto.randomUUID(), content: "testando", isConcluded: false },
  { id: crypto.randomUUID(), content: "testando", isConcluded: false },
  { id: crypto.randomUUID(), content: "testando", isConcluded: false },
];
