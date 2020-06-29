import React, { useState } from "react";
import { TextInput, Modal, Button, View, StyleSheet } from "react-native";

function Input(props) {
  const [input, setInput] = useState("");

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.content}>
        <View style={styles.input}>
          {console.log(input)}
          <TextInput
            placeholder="Enter Here"
            onChange={(e) => {
              return setInput(e.nativeEvent.text);
            }}
            value={input}
          />
        </View>
        <View style={styles.buttons}>
          <Button
            style={styles.button1}
            onPress={props.add.bind(this, input, setInput)}
            title="ADD"
          />
          <Button
            style={styles.button2}
            onPress={props.cancel.bind(this, setInput)}
            title="CANCEL"
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    width: "60%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 2,
    padding: 5,
    marginVertical: 10,
  },
  button1: {
    width: 10,
    backgroundColor: "green",
  },
  button: {
    width: 10,
    backgroundColor: "red",
  },
});

export default Input;
