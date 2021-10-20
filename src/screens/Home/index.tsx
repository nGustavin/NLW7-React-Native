import React from 'react'
import { View } from 'react-native'
import { Header } from '../../components/Header'
import { MessageList } from '../../components/MessageList'
import { SendMessageForm } from '../../components/SendMessageForm'
import { SignInBox } from '../../components/SignInBox'
import { styles } from './styles'

export default function Home(){
  
    return (
      <View style={styles.container}>
        <Header/>
        <MessageList/>
        <SendMessageForm />
      </View>
    )
}