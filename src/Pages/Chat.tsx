import React, { useState } from 'react';
import { Send } from 'lucide-react';
import styled from 'styled-components';

interface MessageProps {
  isUser: boolean;
}

export const Chat = () => {
  const [messages, setMessages] = useState([
    {
      type: 'assistant',
      content: '안녕하세요! 어떤 증상이 있으신가요? 자세히 설명해 주시면 도움을 드리도록 하겠습니다.'
    }
  ]);

  return (
    <ChatContainer>
      <Header>AI 의료 상담</Header>
      <MessagesContainer>
        {messages.map((message, index) => (
          <MessageWrapper key={index} isUser={message.type === 'user'}>
            <MessageBubble isUser={message.type === 'user'}>
              {message.content}
            </MessageBubble>
          </MessageWrapper>
        ))}
      </MessagesContainer>
      <InputContainer>
        <Input type="text" placeholder="증상을 자세히 설명해주세요..." />
        <SendButton>
          <Send size={20} />
        </SendButton>
      </InputContainer>
    </ChatContainer>
  );
}

const ChatContainer = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
`;

const Header = styled.div`
  background-color: #2563eb;
  padding: 16px;
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MessageWrapper = styled.div<MessageProps>`
  display: flex;
  justify-content: ${({isUser}) => (isUser ? 'flex-end' : 'flex-start')};
`;

const MessageBubble = styled.div<MessageProps>`
  max-width: 80%;
  border-radius: 16px;
  padding: 12px 16px;
  background-color: ${(isUser) => (isUser ? '#2563eb' : 'white')};
  color: ${(isUser) => (isUser ? 'white' : '#1f2937')};
  box-shadow: ${(isUser) => (isUser ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.1)')};
`;

const InputContainer = styled.div`
  padding: 16px;
  background-color: white;
  border-top: 1px solid #e5e7eb;
  display: flex;
  gap: 8px;
`;

const Input = styled.input`
  flex: 1;
  background-color: #f3f4f6;
  border-radius: 9999px;
  padding: 8px 16px;
  border: none;
  outline: none;
  &:focus {
    box-shadow: 0 0 0 2px #2563eb;
  }
`;

const SendButton = styled.button`
  background-color: #2563eb;
  color: white;
  border-radius: 9999px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #1d4ed8;
  }
`;


export default Chat;
