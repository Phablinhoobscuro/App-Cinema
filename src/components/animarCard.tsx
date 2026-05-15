import React from "react";

import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image
} from "react-native";

import Carousel from "react-native-reanimated-carousel";
import Cartaz from "./cartaz";
import DataCarousel from "./dataCarousel";

const { width } = Dimensions.get("window");

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReXH44XS6NTeQCkM-BPsql_odqZZyzBmR9BQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThqevjJmu1p28SNaN4-1p7ceHPMIe66g2XxA&s",
  "https://cdn.cineart.com.br/vibezz_526203857.jpg",
];

export default function AnimarCard() {
  return (
    <View style={styles.container}>
      <Carousel
        loop

        width={width * 1}
        height={600}

        data={images}

        style={{
          width: width,
          padding:0,
          margin:0,
          height:560
        }}

        pagingEnabled
        snapEnabled

        mode="parallax"

        modeConfig={{
          parallaxScrollingScale: 0.85,

          parallaxScrollingOffset: width * 0.40,
        }}

        renderItem={({ item }) => <Image
          source={{
            uri:  item 
          }}

          style={{
            width: "100%",
            height: "100%",
            borderRadius: 20,
          }}

          resizeMode="cover"
        />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    alignItems: "stretch",
    justifyContent: "center",
    // width:width,
    overflow: "visible",
  },

  card: {
    flex: 1,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});