import React, { useContext, useState } from 'react'
import { AppContext } from '../../Context/AppContextProvider';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import { IconButton } from '@mui/material';
import { InputContainer, Input, InputWrapper, ChatIcons, SendButton, Emoji } from './style';
import { addDoc, collection, doc, serverTimestamp, setDoc } from '@firebase/firestore';
import { Timestamp } from '@firebase/firestore';
import SentimentSatisfiedOutlined from '@mui/icons-material/SentimentSatisfiedOutlined';
import { Picker } from 'emoji-mart';
// import 'emoji-picker-react/dist/index.css';
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage';
import { storage } from '../../firebase';
import { db } from '../../firebase';

const ChatInput = () => {
    const { state: { loggedUser, selectedContact } } = useContext(AppContext)
    const [input, setInput] = useState('')
    const [image, setImage] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [showEmoji, setShowEmoji] = useState(false)

    const uploadFile = () => {
        document.getElementById('file').click();         // click the file with id 'imageFile' ie) input choose file

    }

    const sendMessage = async (event) => {
        event.preventDefault();
        if (image) {
            const storageRef = ref(storage, `/images/${image.name}`);
            const uploadImage = uploadBytesResumable(storageRef, image);
            uploadImage.on(
                'state_changed',
                (snapshot) => { },
                (error) => console.log(error.message),
                () => {
                    getDownloadURL(uploadImage.snapshot.ref)
                        .then((url) => {
                            setImageURL(url);
                            addMessageToFirestore(url);
                        })
                        .catch((error) => console.log(error.message));
                }
            );
        } else if (input.trim() !== '') {
            addMessageToFirestore();
        }
    };


    /******** add Message to Firestore Function ******* */

    const addMessageToFirestore = (mediaURL) => {
        const user1 = loggedUser.uid;
        const user2 = selectedContact.uid;
        const combinedId = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;  
        addDoc(collection(db, 'chats', combinedId, 'messages'), {
            displayName: loggedUser.displayName,
            text: input,
            senderId: user1,
            receiverId: user2,
            media: mediaURL || '',
            timestamp: Timestamp.now()

        });

        // setDoc(doc(db,'lastMessage',combinedId),{
        //     displayName: loggedUser.displayName,
        //     text: input,
        //     senderId: user1,
        //     receiverId: user2,
        //     media: mediaURL || '',
        //     timestamp: timestamp,
        //     unread:true
        // })
        setInput('');
        setImage('');
        setImageURL('')
        setShowEmoji(false)
    }

    const addEmoji = (e) => {
        let sym = e.unified.split("-");
        let codesArray = [];
        sym.forEach((el) => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        setInput(input + emoji);
    };


    return (

        <InputContainer>
            <InputWrapper onSubmit={sendMessage}>
                <Input type='text'
                    name='input'
                    placeholder='Type a message'
                    value={input}
                    onChange={(e) => { setInput(e.target.value) }}
                />
                <ChatIcons>
                    <Input type="file"
                        style={{ display: "none" }}
                        accept='image/*'
                        id="file"
                        name='file'
                        onChange={(e) => {
                            setImage(e.target.files[0])
                        }} />
                    <IconButton onClick={uploadFile}>
                        <AttachFileOutlinedIcon fontSize='large' />
                    </IconButton>
                    <SentimentSatisfiedOutlined onClick={() => setShowEmoji(true)} />
                    <SendButton type='submit'  >Send</SendButton>
                </ChatIcons>
            </InputWrapper>
            {showEmoji && (<Emoji>
                <Picker theme={'dark'} onEmojiSelect={addEmoji} />
            </Emoji>)}
        </InputContainer>

    )
}

export default ChatInput;
