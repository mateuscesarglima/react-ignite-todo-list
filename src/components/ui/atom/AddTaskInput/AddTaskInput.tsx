import { IAddTaskInput } from "@interfaces/index";
import React from "react";
import * as C from "./styles";

const AddTaskInput = ({ ...props }: IAddTaskInput) => {
  return <C.Input {...props} />;
};

export default AddTaskInput;
