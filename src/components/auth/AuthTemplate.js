import styled from "styled-components";

// 로그인 페이지의 레이아웃을 담당하는 컴포넌트

const AuthTemplateBlock = styled.div`
  position:absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  /* flex로 내부 내용 중앙 정렬*/
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
    letter-spacing: 2px;
  }
  width: calc(100vw/3);
  margin-top: 4rem;
`

const AuthTemplate = ({children}) => {
  return (
    <AuthTemplateBlock>
      <Box>
        <div className="logo-area">
          Welcome to KaKaoTalk
        </div>
        {children}
      </Box> 
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;