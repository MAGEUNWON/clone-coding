import styled from "styled-components"


const KakaoBlock = styled.div`
  width: calc(100vw/3);
  height: 100px;
  background: #F5F5F5;
  display: flex;
  

`

const Kakao = () => {
  return (
    <>
      <KakaoBlock>
        <div>
          <img src="/kakaoLogo.png" alt="kakao" />
        </div>
        <div></div>
        <div></div>
      </KakaoBlock>
    </>
    
      
    
    
  );
};

export default Kakao;