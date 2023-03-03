import styled, {css}  from "styled-components"

const StyledButton = styled.button`
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: #4e4c4c;
  outline: none;
  cursor: pointer;
  background: #F5F5F5;

  ${props => 
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      height: 5rem;
      font-size: 1.5rem;
    `
  }
`;




const Button = props => <StyledButton {...props} />;

export default Button;
