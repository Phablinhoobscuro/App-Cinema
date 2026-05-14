import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Cartaz from "./cartaz";

export default function SectionTema({categoria}:{categoria?:string}) {
  return (
    <View style={styles.tema}>
      <Text style={styles.textLabel}>{categoria}</Text>

      <ScrollView
        horizontal
        pagingEnabled={false}
        contentContainerStyle={styles.cartazes}
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <Cartaz key={index} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tema: {
    marginTop: 20,
    marginHorizontal:10
  },

  cartazes: {
    // paddingHorizontal: 10,
    alignItems: "center",
    gap:5
  },

  textLabel: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
    fontWeight: "bold",
  },
});
