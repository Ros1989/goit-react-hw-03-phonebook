import styled from 'styled-components';

const TaskList = styled.ul`
  max-width: 700px;
  margin: 0 auto;
`;
const TaskItem = styled.li`
  padding: 5px 5px 5px 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* background-color:grey; */
  background-color: #fff;
  :not(:nth-child(odd)) {
    background-color: #cacaca;
  }
  border: 1px solid black;
  border-radius: 0.5rem;
  margin-bottom: 10px;
  box-shadow: 10px 5px 5px grey;
`;
const TaskItemElements = styled.p`
  font-weight: 500;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
const Button = styled.button`
  padding: 5px 10px;
  max-width: 200px;
  height: 20px;
  background-color: goldenrod;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.6rem;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
`;
export { TaskList, TaskItem, TaskItemElements, Button };
