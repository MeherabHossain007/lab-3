import { Text, Center, Container, Heading } from 'native-base';
import { StyleSheet } from 'react-native';
import React from 'react'

export default function Home() {
  return (
    <Center flex={1} safeArea>
      <Container>
        <Heading>
          A component library for the
          <Text color="emerald.500"> React Ecosystem</Text>
        </Heading>
        <Text mt="3" fontWeight="medium" style={styles.textContainer}>
          NativeBase is a simple, modular and accessible component library that
          gives you building blocks to build you React applications.
        </Text>
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
