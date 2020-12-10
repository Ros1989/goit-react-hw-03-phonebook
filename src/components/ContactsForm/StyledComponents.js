import styled from 'styled-components';

const Form = styled.form`
  max-width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const FormLabel = styled.label`
  width: 85%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
  font-weight: 500;
  color: #ff18cd;
`;
const Input = styled.input`
  height: 15px;
  width: 250px;
`;

const Button = styled.button`
  padding: 2px 10px;
  max-width: 250px;
  height: 30px;
  background-color: #fff418;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;

export { Form, FormLabel, Input, Button };
