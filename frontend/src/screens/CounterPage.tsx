import { Button, HStack, VStack, View } from "native-base";
import React, { useState } from "react";
import { Text, Vibration } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CounterPage = (props: any) => {
  const [counter, setCounter] = useState(0);

  const navigation = useNavigation();

  const increaseHandeler = () => {
    setCounter(counter + 1);
    Vibration.vibrate(100);
  };

  const decreaseHandeler = () => {
    setCounter(counter - 1);
    Vibration.vibrate(100);
  };

  const navigationHandeler = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={style.mainContainer}>
      <Text style={style.counterContainer}>{counter}</Text>
      <View>
        <VStack space={3}>
          <HStack space={3}>
            <Button onPress={increaseHandeler}>Increase</Button>
            <Button onPress={decreaseHandeler}>Decrease</Button>
            <Button
              onPress={() => {
                setCounter(0);
              }}
            >
              Reset
            </Button>
          </HStack>
          <Button onPress={navigationHandeler}>Login</Button>
        </VStack>
      </View>
    </View>
  );
};

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

export default CounterPage;
