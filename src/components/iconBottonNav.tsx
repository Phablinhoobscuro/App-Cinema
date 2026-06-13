import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
type IconName = keyof typeof Ionicons.glyphMap;
export default function InconBottonNav({
  stado,
  icon = "help-circle",
}: {
  stado: boolean;
  icon?: IconName;
}) {
  return (
    <View style={[stado ? [styles.opemPege, styles.box] : styles.closePege]}>
      <Ionicons
        name={stado ? `${icon}` : `${icon}-outline`as IconName}
        size={26}
        color="#fff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    shadowColor: "rgb(18, 95, 172)",
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

    backgroundColor: "#003870ff",

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
    paddingHorizontal:7,
    paddingVertical:7.5,
    borderTopWidth: 2,
    borderTopColor: "#0e65bdff",

    transform: [
      {
        translateY: -5,
      },
    ],
  },
});
