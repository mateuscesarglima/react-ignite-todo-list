import AddTask from "@components/ui/molecule/AddTask/AddTask";
import TasksList from "@components/ui/molecule/TasksList/TasksList";
import { IMain } from "@interfaces/index";
import * as C from "./styles";

const Main = ({ tasks }: IMain) => {
  console.log(tasks);
  return (
    <C.MainContainer>
      <AddTask />
      <TasksList tasks={tasks} />
    </C.MainContainer>
  );
};

export default Main;
