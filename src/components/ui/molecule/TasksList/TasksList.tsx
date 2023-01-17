import React from "react";
import * as C from "./styles";
import Clipboard from "@assets/Clipboard.png";
import { ITaskList } from "@interfaces/index";
import ListItem from "../ListItem/ListItem";

const TasksList = ({ tasks, deleteTaskHandle }: ITaskList) => {
  return (
    <C.TasksListContainer>
      <C.TasksListHeader>
        <p>
          Tarefas Criadas <span>{tasks.length}</span>
        </p>
        <p>
          Tarefas Concluidas <span>0</span>
        </p>
      </C.TasksListHeader>
      <C.TasksListBody>
        {!tasks ? (
          <>
            <div>
              <img src={Clipboard} alt="" />
            </div>
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </>
        ) : (
          <C.ListItemBox>
            {tasks.map((task) => (
              <div key={task.id}>
                <ListItem
                  id={task.id}
                  content={task.content}
                  isConcluded={task.isConcluded}
                  deleteTaskHandle={deleteTaskHandle}
                />
              </div>
            ))}
          </C.ListItemBox>
        )}
      </C.TasksListBody>
    </C.TasksListContainer>
  );
};

export default TasksList;
