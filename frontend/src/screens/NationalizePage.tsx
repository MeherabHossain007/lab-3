import axios from "axios";
import { View, Text, TextArea, Input, Button } from "native-base";
import React, { useState } from "react";
import { TextInput } from "react-native";

function NationalizePage() {
  const [nationality, setNationality] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = () => {
    axios.get(`https://api.nationalize.io?name=${userName}`).then((res) => {
      if(res.data.country){
        setNationality(res.data.country[0]["country_id"])
      }
    });
  };
  return (
    <View flex={1} justifyContent={"center"} alignItems={"center"}>
      <Text fontSize={80} fontWeight={700} color={"red.600"}>
        {nationality}
      </Text>
      <View>
        <Input
          width={200}
          height={10}
          margin={12}
          borderWidth={1}
          value={userName}
          onChangeText={setUserName}
        />
        <Button onPress={handleSubmit}>Submit</Button>
      </View>
    </View>
  );
}

export default NationalizePage;
