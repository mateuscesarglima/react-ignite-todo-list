import styled from "styled-components";

export const TasksListContainer = styled.section`
  margin-top: 4rem;
`;

export const TasksListHeader = styled.header`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  margin-bottom: 1.6rem;

  p {
    display: flex;
    gap: 8px;
  }

  > p:first-child {
    color: var(--blue);
  }

  > p:last-child {
    color: var(--purple);
  }

  span {
    background: var(--gray-400);
    color: var(--gray-200);
    padding: 1px 8px;
    border-radius: 999px;
  }
`;

export const TasksListBody = styled.div`
  border-top: 1px solid var(--gray-400);

  > div:first-child {
    margin-top: 4rem;
    text-align: center;
  }

  > div:nth-child(2) {
    margin-top: 1.6rem;

    > p:first-child {
      font-weight: bold;
      line-height: 1.4;
    }
  }
`;

export const ListItemBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;
