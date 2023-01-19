import Header from "@components/ui/organism/Header/Header";
import Main from "@components/ui/organism/Main/Main";
import { Task } from "@constants/index";
import { ITask } from "@interfaces/index";
import { ToastAlert } from "@utils/toast";
import { useEffect, useState } from "react";

const Page = () => {
  const [tasks, setTasks] = useState(Task);
  const [taskDescription, setTaskDescription] = useState("");
  const [concludedTasks, setConcludedTasks] = useState<number>();

  useEffect(() => {
    const closedTasks = () => {
      const concludedTasks = tasks.filter((task) => {
        return task.isConcluded === true;
      });
      setConcludedTasks(concludedTasks.length);
    };
    closedTasks();
  });

  const addTaskHandle = () => {
    if (taskDescription.trim().length === 0) {
      return ToastAlert({
        message: "O campo adicionar tarefa não pode ser vazio.",
        type: "error",
      });
    } else {
      setTasks([
        ...tasks,
        {
          id: crypto.randomUUID(),
          content: taskDescription,
          isConcluded: false,
        },
      ]);
      setTaskDescription("");
    }
  };

  const deleteTaskHandle = (taskToBeDeleted: string): void => {
    const taskWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskToBeDeleted;
    });
    setTasks(taskWithoutDeletedOne);
  };

  return (
    <div>
      <Header />
      <Main
        tasks={tasks}
        taskDescription={taskDescription}
        setTaskDescription={setTaskDescription}
        addTaskHandle={addTaskHandle}
        deleteTaskHandle={deleteTaskHandle}
        concludedTasks={concludedTasks}
      />
    </div>
  );
};

export default Page;
