import styled from "styled-components";

export const ListItemContainer = styled.div`
  background: var(--gray-500);
  display: flex;
  gap: 12px;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--gray-400);
  padding: 16px;

  p {
    color: var(--gray-100);
  }

  button {
    background: none;
    border: none;
    cursor: pointer;

    > svg {
      color: var(--gray-300);
    }
  }
`;

export const RadioButton = styled.input``;

export const RadioButtonLabel = styled.label``;
