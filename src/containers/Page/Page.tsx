import Header from "@components/ui/organism/Header/Header";
import Main from "@components/ui/organism/Main/Main";
import { Task } from "@constants/index";
import { useState } from "react";

const Page = () => {
  const [tasks, setTasks] = useState(Task);
  const [taskDescription, setTaskDescription] = useState("");

  const addTaskHandle = (): void => {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        content: taskDescription,
        isConcluded: false,
      },
    ]);
    setTaskDescription("");
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
      />
    </div>
  );
};

export default Page;
