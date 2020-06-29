import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import Input from "./components/Input";
import Output from "./components/Output";

export default function App() {
  const [isMode, setIsMode] = useState(false);
  const [items, setItems] = useState([]);

  const modalHandler = () => setIsMode(true);

  const addHandler = (p, setInput) => {
    setItems((prevState, index) => [
      ...prevState,
      { key: Math.random().toString(), value: p },
    ]);
    setInput("");
    setIsMode(false);
  };

  const cancelAddHandler = (setInput) => {
    setInput("");
    setIsMode(false);
  };
  0;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Text Printer</Text>
      </View>
      <Input visible={isMode} add={addHandler} cancel={cancelAddHandler} />
      <View style={styles.Buttons}>
        <View style={styles.Button}>
          <Button onPress={modalHandler} title="Add Text" />
        </View>
        <SafeAreaView>
          <Output items={items} />
        </SafeAreaView>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  header: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    width: "100%",
  },
  headerText: {
    color: "white",
    fontSize: 20,
  },
  Buttons: {
    flex: 10,
    margin: 10,
  },
  Button: {
    color: "red",
    maxWidth: "100%",
    alignItems: "center",
    paddingBottom: 10,
  },
});
