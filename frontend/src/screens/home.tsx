import { Text, Center, Container, Heading } from 'native-base';
import { StyleSheet } from 'react-native';
import React from 'react'
import CounterPage from './CounterPage';

export default function Home() {
  return (
    <Center flex={1} safeArea>
      <Container>
        <CounterPage/>
      </Container>
    </Center>
  )
}

const styles = StyleSheet.create({
textContainer:{
  fontWeight: "700",
  fontSize: 16,
  color: "red"
}
})
