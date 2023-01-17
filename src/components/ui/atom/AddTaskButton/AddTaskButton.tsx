import React, { ButtonHTMLAttributes } from "react";
import * as C from "./styles";
import PlusImg from "@assets/plus.svg";

const AddTaskButton = ({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <C.Button {...props}>
      Criar <img src={PlusImg} alt="" />
    </C.Button>
  );
};

export default AddTaskButton;
