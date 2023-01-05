import AddTaskButton from "@components/ui/atom/AddTaskButton/AddTaskButton";
import AddTaskInput from "@components/ui/atom/AddTaskInput/AddTaskInput";
import React from "react";
import * as C from "./styles";

const AddTask = () => {
  return (
    <C.AddTaskContainer>
      <AddTaskInput type="text" placeholder="Adicione uma nova tarefa" />
      <AddTaskButton />
    </C.AddTaskContainer>
  );
};

export default AddTask;
