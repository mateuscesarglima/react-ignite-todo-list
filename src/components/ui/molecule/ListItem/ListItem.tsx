import { ITask } from "@interfaces/index";
import { Trash } from "phosphor-react";
import React, { useState } from "react";
import * as C from "./styles";
const ListItem = ({ id, content, isConcluded }: ITask) => {
  const [isChecked, setIsChecked] = useState(isConcluded);
  return (
    <C.ListItemContainer>
      <C.CheckBox
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <C.Content isChecked={isChecked}>{content}</C.Content>
      <button>
        <Trash size={18} />
      </button>
    </C.ListItemContainer>
  );
};

export default ListItem;