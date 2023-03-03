import styled from "styled-components";


const ChatsBoxTemplateBlock = styled.div`
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
  width: calc(100vw/3);
`

const ChatsBoxTemplate = ({children}) => {
  return (
    <ChatsBoxTemplateBlock>
      <Box>
      {children}
      </Box>
    </ChatsBoxTemplateBlock>
  );
};

export default ChatsBoxTemplate;