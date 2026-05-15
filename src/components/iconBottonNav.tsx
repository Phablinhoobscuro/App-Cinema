import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

export default function InconBottonNav({
  stado,
  icon = "help-circle",
}: {
  stado: boolean;
  icon?: string;
}) {
  return (
    <View style={[stado ? [styles.opemPege,styles.box] : styles.closePege]}>
      <Ionicons
        name={stado ? `${icon}` : `${icon}-outline`}
        size={28}
        color="#fff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    shadowColor: "#094e92ff",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,

    elevation: 8,
  },

  opemPege: {
    width: 60,
    height: 60,
    borderRadius: 30,

    backgroundColor: "#1b2631",

    justifyContent: "center",
    alignItems: "center",

    transform: [
      {
        translateY: -20,
      },
    ],
  },

  closePege: {
    backgroundColor: "rgba:(0,0,0,0)",

    justifyContent: "center",
    alignItems: "center",

    transform: [
      {
        translateY: -10,
      },
    ],
  },
});
