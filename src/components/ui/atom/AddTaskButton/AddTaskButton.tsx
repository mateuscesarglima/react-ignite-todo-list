import React from "react";
import * as C from "./styles";
import PlusImg from "@assets/plus.svg";

const AddTaskButton = () => {
  return (
    <C.Button>
      Criar <img src={PlusImg} alt="" />
    </C.Button>
  );
};

export default AddTaskButton;
