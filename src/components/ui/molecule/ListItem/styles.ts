import styled from "styled-components";

export const ListItemContainer = styled.div`
  background: var(--gray-500);
  display: flex;
  border-radius: 8px;
  justify-content: space-between;
  border: 1px solid var(--gray-400);
  padding: 16px;

  button {
    background: none;
    border: none;
    cursor: pointer;

    > svg {
      color: var(--gray-300);
    }
  }
`;

export const Content = styled.p<{ isChecked: boolean }>`
  color: ${({ isChecked }) =>
    isChecked ? "var(--gray-300)" : "var(--gray-100)"};
  text-decoration: ${({ isChecked }) => (isChecked ? "line-through" : "none")};
`;

export const CheckBox = styled.input``;

export const RadioButtonLabel = styled.label``;
