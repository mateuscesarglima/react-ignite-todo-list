import Header from "@components/ui/organism/Header/Header";
import Main from "@components/ui/organism/Main/Main";
import { Task } from "@constants/index";
import { useState } from "react";

const Page = () => {
  const [tasks, setTasks] = useState(Task);
  return (
    <div>
      <Header />
      <Main tasks={tasks} />
    </div>
  );
};

export default Page;
