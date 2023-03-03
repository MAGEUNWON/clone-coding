import styled from 'styled-components';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

// 로그인 폼 보여줌

const AuthFormBlock = styled.div`
  .text {
    margin:0;
    margin-bottom:1rem;
    text-align: center;
    color: #868e96;
    font-size:1.5rem;
  }
  .form {
    position: relative;
    top:5rem;
  }
  .footer{
    margin-top:7rem;
    text-align: center;
    font-size: 1.5rem;
    color: #4e4c4c;
  }
`;

// 스타일링 된 input
const StyledInput = styled.input`
  font-size: 1.2rem;
  border: none;
  border-bottom: 1px solid #868e96;
  padding-bottom: 1.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: grey;
    border-bottom: 1px solid grey;
  }
  & + & {
    margin-top: 1rem;
  }
`;


const LoginButtonMarginTop = styled(Button)`
  margin-top: 3rem;
`;

const SingupButtonMarginTop = styled(Button)`
  margin-top: 1.5rem;
`


const AuthForm = () => {
  return (
    <AuthFormBlock>
      <div className='text'>If you havea KaKaoTalk Account, <br />
        log in with your email or phone number</div>
      <form className='form' method='post' action='/loginPage'>
        <StyledInput autoComplete="username" name="username" placeholder='Email or phonen number' />
        <StyledInput 
          autoComplete="new-password"
          name="password"
          placeholder='Password'
          type="password"
        />
        <LoginButtonMarginTop fullWidth>
          <Link to="/loginPage">Log In</Link>
        </LoginButtonMarginTop>
        <SingupButtonMarginTop fullWidth>Sign Up</SingupButtonMarginTop>
      </form>
      <div className='footer'>Find KaKao Account or Password</div>
    </AuthFormBlock>
  );
};

export default AuthForm;