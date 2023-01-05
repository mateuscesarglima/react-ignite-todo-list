import React from "react";
import * as C from "./styles";
import Clipboard from "@assets/Clipboard.png";

const TasksList = () => {
  return (
    <C.TasksListContainer>
      <C.TasksListHeader>
        <p>
          Tarefas Criadas <span>0</span>
        </p>
        <p>
          Tarefas Concluidas <span>0</span>
        </p>
      </C.TasksListHeader>
      <C.TasksListBody>
        <div>
          <img src={Clipboard} alt="" />
        </div>
        <div>
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </C.TasksListBody>
    </C.TasksListContainer>
  );
};

export default TasksList;
