import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Button = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: "#ff637c",
      alignSelf: "center",
      margin: 10,
      padding: 10,
      ...props.buttonStyle,
    }}
    onPress={props.onPress}
  >
    <Text style={myStyle.buttonText}>{props.text}</Text>
  </TouchableOpacity>
);

export default () => (
  <View style={{ flex: 1, justifyContent: "center" }}>
    <Button text="Say hello" onPress={() => alert("hello!")} />
    <Button text="Say goodbye" onPress={() => alert("goodbye!")} buttonStyle={{backgroundColor: "#4dc2c2"}} />
  </View>
);
const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  button: {},
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
