import AddTask from "@components/ui/molecule/AddTask/AddTask";
import TasksList from "@components/ui/molecule/TasksList/TasksList";
import { IMain } from "@interfaces/index";
import * as C from "./styles";

const Main = ({
  tasks,
  setTaskDescription,
  taskDescription,
  addTaskHandle,
  deleteTaskHandle,
}: IMain) => {
  return (
    <C.MainContainer>
      <AddTask
        setTaskDescription={setTaskDescription}
        taskDescription={taskDescription}
        addTaskHandle={addTaskHandle}
      />
      <TasksList tasks={tasks} deleteTaskHandle={deleteTaskHandle} />
    </C.MainContainer>
  );
};

export default Main;
