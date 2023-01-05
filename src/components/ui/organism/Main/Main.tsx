import AddTask from "@components/ui/molecule/AddTask/AddTask";
import TasksList from "@components/ui/molecule/TasksList/TasksList";
import React from "react";
import * as C from "./styles";

const Main = () => {
  return (
    <C.MainContainer>
      <AddTask />
      <TasksList />
    </C.MainContainer>
  );
};

export default Main;
