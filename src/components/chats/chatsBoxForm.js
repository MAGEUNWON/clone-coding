import styled from "styled-components";
import Kakao from "./kakao";
import {GoSearch} from 'react-icons/go';
import {BsChat} from 'react-icons/bs';
import {HiOutlineMusicNote} from 'react-icons/hi';
import {RxGear} from 'react-icons/rx';
import {RxPerson} from 'react-icons/rx';
import {IoChatbubbleSharp} from 'react-icons/io5';
import {BiDotsHorizontalRounded} from 'react-icons/bi';

const ChatsBoxFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: space-between;
`;

const HeaderBox = styled.div`
  .Chats{
    border: none;
    font-size: 3rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    outline: none;
    cursor: pointer;
    width: 100px;
  }
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
`

const IconsBox = styled.div`
  .icons{
    width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center
    background: #F5F5F5;
  }
  .icon{
    width: 32px;
    height: 32px;
  }
`
const FooterBox = styled.div`
  width: calc(100vw/3);
  height: 100px;
  background: #F5F5F5;
  display : grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  
  .icon{
    width: 35px;
    height: 35px;
    margin-left:4.5rem;
  }
`

const ChatsBoxForm = () => {
  return (
    <ChatsBoxFormBlock>
      <HeaderBox>
        <div className="Chats">Chats</div>
        <IconsBox>
          <div className="icons">
            <GoSearch className="icon" />
            <BsChat className="icon" />
            <HiOutlineMusicNote className="icon" />
            <RxGear className="icon"/>
          </div>
        </IconsBox>
      </HeaderBox>
      <Kakao />
      <FooterBox>
        <div>
          <RxPerson className="icon" />
        </div>
        <div>
          <IoChatbubbleSharp className="icon" />
        </div>
        <div>
          <GoSearch className="icon" />
        </div>
        <div>  
          <BiDotsHorizontalRounded className="icon" />
        </div>
      </FooterBox>
    </ChatsBoxFormBlock>
  );
};

export default ChatsBoxForm;