import { Button, HStack, View } from "native-base";
import React from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";

export default function CounterPage() {
  let counter = 0;

  const increaseHandeler = () => {
    counter = counter + 1;
  };

  const decreaseHandeler = () => {
    counter = counter - 1;
  };

  return (
    <View style={style.mainContainer}>
      <Text style={style.counterContainer}>{counter}</Text>
      <View>
        <HStack space={3}>
          <Button onPress={increaseHandeler}>Increase</Button>
          <Button onPress={decreaseHandeler}>Decrease</Button>
        </HStack>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  counterContainer: {
    fontSize: 80,
    fontWeight: "700",
    color: "red",
  },
});
