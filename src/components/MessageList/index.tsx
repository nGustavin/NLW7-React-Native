import React from 'react';
import {
  ScrollView
} from 'react-native';
import { Message } from '../Message';
import { styles } from './styles';

const messages = {
  id: '1',
  text: 'mensagem teste',
  user: {
    name: 'Augusto',
    avatar_url: 'https://github.com/ngustavin.png',
  }
}

export function MessageList(){
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    > 
      <Message data={messages}/>
      <Message data={messages}/>
      <Message data={messages}/>
    </ScrollView>
  );
}