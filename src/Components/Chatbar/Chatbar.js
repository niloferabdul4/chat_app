import React, { useContext, useState } from 'react'
import Messages from '../Messages/Messages'
import { ChatContainer, IntroImage, ChatNavContainer, ChatMainContainer, Wrapper, ChatFooter } from './style'
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import intro from '../../assets/whatsapp-connect.jpg';
import { AppContext } from '../../Context/AppContextProvider';
import { Timestamp, collection, addDoc } from '@firebase/firestore';
import { Image } from '../Users/style';
import { LeftWrapper, RightWrapper } from '../Navbar/style';
import { ToastContainer } from 'react-toastify';
import ChatInput from './ChatInput';
import { Container } from '../Messages/style';


const Chatbar = () => {
  const { state: { chats, selectedContact, loggedUser } } = useContext(AppContext)

  return (
    <>
      <ChatContainer>
        {selectedContact === null || selectedContact.uid === loggedUser.uid ?
          (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '100px auto', alignItems: 'center' }}>
              <IntroImage src={intro} alt='' />
              <h2 style={{ fontWeight: '400' }}>Select a user to start a conversation</h2>
            </div>)
          :
          (
            <>

              <ChatNavContainer >
                <Wrapper >
                  <LeftWrapper key={selectedContact?.uid}>
                    <Image src={selectedContact?.photoURL} alt='' />
                    <p style={{ fontFamily: 'sans-serif', fontWeight: 'semi-bold', fontSize: '18px', padding: '10px 0px' }}>{selectedContact?.displayName}</p>
                  </LeftWrapper>
                  <RightWrapper>
                    <VideoCameraBackOutlinedIcon fontSize='large' />
                    <PersonAddAlt1OutlinedIcon fontSize='large' />
                    <MoreHorizOutlinedIcon fontSize='large' />
                  </RightWrapper>
                </Wrapper>
              </ChatNavContainer>

              <ChatMainContainer>

                {chats?.sort((a, b) => a.data.timestamp - b.data.timestamp)
                  .map((chat) => {
                    return <>
                    
                      <Messages chat={chat} key={chat.id} index={chat.id} />
                      <ToastContainer />
                     
                    </>
                  })
                }
              </ChatMainContainer>
              <ChatFooter>
                <ChatInput />
              </ChatFooter>
            </>
          )

        }

      </ChatContainer>
    </>
  )
}
export default Chatbar;