import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function buttonCategoria({
  text,
  color = "#df0202",
}: {
  text: string;
  color?: string;
}) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    margin:3
  },

  text: {
    color: "#fff",
    fontSize: 15,
  },
});
