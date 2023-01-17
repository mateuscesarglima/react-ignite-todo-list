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
  };

  return (
    <div>
      <Header />
      <Main
        tasks={tasks}
        taskDescription={taskDescription}
        setTaskDescription={setTaskDescription}
        addTaskHandle={addTaskHandle}
      />
    </div>
  );
};

export default Page;
