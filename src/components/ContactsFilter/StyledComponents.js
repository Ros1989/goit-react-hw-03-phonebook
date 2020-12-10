import styled from 'styled-components';

const FilterBlock = styled.div`
  width: 100%;
  padding-bottom: 20px;
  margin-top: 10px;
`;
const Label = styled.label`
  width: 100%;
  font-weight: 500;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Title = styled.p`
  width: 100%;
  /* text-align:center; */
  margin-bottom: 5px;
  margin-left: 205px;
  color: #ff188c;
`;
const Input = styled.input`
  width: 30%;
`;
export { FilterBlock, Label, Title, Input };
