import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Button } from "react-native";

const Part1_BT4 = () => {
  const [index, setIndex] = useState(0);
  return (
    <View style={myStyle.container}>
      <Text style={myStyle.buttonText}>Bạn đã nhấn nút: {index} lần</Text>
      <Button title="Press me" onPress={() => setIndex(index + 1)} />
    </View>
  );
};
export default Part1_BT4;
const myStyle = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
  },
});
