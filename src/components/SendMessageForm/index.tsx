import React, { useState } from 'react';

import {
  TextInput,
  View
} from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export const SendMessageForm:React.FC = () => {
  const [message, setMessage] = useState('')
  const [sendingMessage, setSendingMessage] = useState(false)

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.textInput}
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa para este evento"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        editable={!sendingMessage}
      />
      <Button 
        title="ENVIAR MENSAGEM"
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
      />
    </View>
  );
}