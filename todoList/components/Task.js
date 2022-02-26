import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity> {/*Opacity button*/}
        <Text style={styles.itemsText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap", //Wraps item to the next line
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#54D9EA",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemsText: {
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#54D9EA",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task; //So you can import it somewhere
