import React from "react";
import { View, FlatList, Text, StyleSheet, SafeAreaView } from "react-native";

function Output(props) {
  return (
    <SafeAreaView>
      <FlatList
        data={props.items}
        renderItem={(listItem) => (
          <View style={styles.list}>
            <Text style={styles.text}> {listItem.item.value} </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    borderColor: "white",
    borderWidth: 2,
    backgroundColor: "blue",
    margin: 5,
    padding: 5,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default Output;
