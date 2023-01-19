import AddTaskButton from "@components/ui/atom/AddTaskButton/AddTaskButton";
import AddTaskInput from "@components/ui/atom/AddTaskInput/AddTaskInput";
import { IAddTask } from "@interfaces/index";
import React from "react";
import * as C from "./styles";

const AddTask = ({
  taskDescription,
  setTaskDescription,
  addTaskHandle,
}: IAddTask) => {
  return (
    <C.AddTaskContainer>
      <AddTaskInput
        type="text"
        onChange={(e) => setTaskDescription(e.target.value)}
        value={taskDescription}
        placeholder="Adicione uma nova tarefa"
        required
      />
      <AddTaskButton onClick={() => addTaskHandle()} />
    </C.AddTaskContainer>
  );
};

export default AddTask;
