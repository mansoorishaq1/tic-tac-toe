import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TTTGameSingleField = (props: {
  rowNumber: number;
  fieldNumber: number;
  height: number;
  fieldType: string;
}): React.ReactElement => {
  return (
    <TouchableOpacity>
      <View
        style={[
          {
            width: props.height,
            height: props.height,
          },
          styles.fieldContainer,
        ]}
      >
        <Text style={styles.textStyle}>
          {props.fieldType === "e" ? "" : props.fieldType === "P1" ? "❌" : "O"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    margin: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 44,
  },
});

export default TTTGameSingleField;
