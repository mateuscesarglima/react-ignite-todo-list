import { IListItem } from "@interfaces/index";
import { Trash } from "phosphor-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { ToastAlert } from "../../../../utils/toast";
import * as C from "./styles";

const ListItem = ({
  id,
  content,
  isConcluded,
  deleteTaskHandle,
}: IListItem) => {
  const [isChecked, setIsChecked] = useState(isConcluded);

  return (
    <C.ListItemContainer>
      <C.CheckBox
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <C.Content isChecked={isChecked}>{content}</C.Content>
      <button
        onClick={() => [
          deleteTaskHandle(id),
          ToastAlert({ message: "Task deleted successfully", type: "success" }),
        ]}
      >
        <Trash size={18} />
      </button>
    </C.ListItemContainer>
  );
};

export default ListItem;
