import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';

const Char = [
  {
    id: '1',
    chat: 'How may i help you',
    ques: {
      A: 'how to place an order on the eCommerce app ',
      B: 'When delivered my order',
      C: 'when my money will  refund my canceled order',
    },
  },

  {
    id: '2',
    chat: 'how to place an order on the eCommerce app',
    ques: {
      A:
        'Select the item you would like to purchase by adding it to your shopping cart.',
      B:
        "Create an account on the eCommerce platform if you don't already have one.",
      C: 'Enter your shipping and payment information',
    },
  },
  {
    id: '3',
    chat: 'When delivered my order',
    ques: {
      A: 'It depends on the type of order.',
      B:
        'it will usually arrive within the estimated delivery window provided at checkout.',
      C:
        ' If you placed an in-store order, it will usually be ready for pickup within the estimated time frame.',
    },
  },
  {
    id: '4',
    chat: 'when my money will  refund my canceled order',
    ques: {
      A: 'cancel your order',
      B: 'placed your order',
      C: 'refunds money',
    },
  },
];

const ChatFirebase = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  return (
    <>
      <Text>
        There are many potential problems associated with online shopping for
        customers
      </Text>
      <GiftedChat
        style={{backgroundColor: 'white'}}
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={props => {
          return (
            <Bubble
              {...props}
              wrapperStyle={{
                right: {
                  backgroundColor: 'deeppink',
                },
              }}
            />
          );
        }}
      />
    </>
  );
};

export default ChatFirebase;

const styles = StyleSheet.create({});
