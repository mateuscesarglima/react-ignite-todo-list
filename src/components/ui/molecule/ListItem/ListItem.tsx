import { Trash } from "phosphor-react";
import React from "react";
import * as C from "./styles";
const ListItem = () => {
  return (
    <C.ListItemContainer>
      <C.RadioButton type="radio" />
      <p style={{ textAlign: "start" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
        facilis corporis. incidunt.
      </p>
      <button>
        <Trash size={24} />
      </button>
    </C.ListItemContainer>
  );
};

export default ListItem;
