import styled from "styled-components";
import checkImg from "@assets/check.png";

export const ListItemContainer = styled.div`
  background: var(--gray-500);
  border-radius: 8px;
  border: 1px solid var(--gray-400);
  padding: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;

  button {
    background: none;
    border: none;
    cursor: pointer;

    > svg {
      color: var(--gray-300);
      width: 24px;
      height: 24px;

      &:hover {
        color: var(--danger);
      }
    }
  }
`;

export const Content = styled.p<{ isChecked: boolean }>`
  color: ${({ isChecked }) =>
    isChecked ? "var(--gray-300)" : "var(--gray-100)"};
  text-decoration: ${({ isChecked }) => (isChecked ? "line-through" : "none")};
  text-align: start;
`;

export const CheckBox = styled.input`
  width: 24px;
  height: 24px;
  -webkit-appearance: none;
  border-radius: 50%;
  outline: 1px solid var(--blue);

  &:checked {
    background-image: url("./src/assets/check.png");
    background-repeat: no-repeat;
    background-size: cover;
    outline: none;
  }
`;
