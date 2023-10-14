import { Button, HStack, View } from "native-base";
import React, { useState } from "react";
import { Text, Vibration } from "react-native";
import { StyleSheet } from "react-native";

export default function CounterPage() {
  const [counter, setCounter] = useState(0);

  const increaseHandeler = () => {
    setCounter(counter + 1);
    Vibration.vibrate(100)
  };

  const decreaseHandeler = () => {
    setCounter(counter - 1);
    Vibration.vibrate(100)
  };

  return (
    <View style={style.mainContainer}>
      <Text style={style.counterContainer}>{counter}</Text>
      <View>
        <HStack space={3}>
          <Button onPress={increaseHandeler}>Increase</Button>
          <Button onPress={decreaseHandeler}>Decrease</Button>
          <Button onPress={()=>{setCounter(0)}}>Reset</Button>
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
