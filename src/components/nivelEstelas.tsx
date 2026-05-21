import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function NivelEstrelas({ nota = 0 }: { nota?: number }) {
  return (
    <View style={styles.coteiner}>
      <Text style={styles.nota}>{nota}</Text>
      <Text>
        {nota &&
          Array.from({ length: nota }).map((_, index) => (
            <Ionicons key={index} name="star" size={10} color="gold" />
          ))}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  coteiner: {
    flexDirection: "row",
    alignItems: "center",
  },
  nota: {
    fontSize: 10,
    color: "#ffff",
    paddingRight: 5
  },
});
