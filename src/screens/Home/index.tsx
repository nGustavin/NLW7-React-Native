import React from 'react'
import { Text, View } from 'react-native'
import { Header } from '../../components/Header'
import { MessageList } from '../../components/MessageList'
import { styles } from './styles'

export default function Home(){
  
    return (
      <View style={styles.container}>
        <Header/>
        <MessageList/>
      </View>
    )
}