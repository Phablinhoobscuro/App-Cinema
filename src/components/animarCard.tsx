import React, { useRef } from "react";
import { Animated, View, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const CARD_WIDTH = width ;
const SPACING = 20;

const data = [1, 2, 3, 4, 5];

export default function AnimarCard() {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <Animated.ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH + SPACING}
      decelerationRate="fast"
      contentContainerStyle={{
        paddingHorizontal: (width - CARD_WIDTH) / 2,
      }}
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                x: scrollX,
              },
            },
          },
        ],
        { useNativeDriver: true },
      )}
      scrollEventThrottle={16}
    >
      {data.map((item, index) => {
        const inputRange = [
          (index - 1) * (CARD_WIDTH + SPACING),
          index * (CARD_WIDTH + SPACING),
          (index + 1) * (CARD_WIDTH + SPACING),
        ];

        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.85, 1.1, 0.85],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={index}
            style={[
              styles.card,
              {
                transform: [{ scale }],
              },
            ]}
          />
        );
      })}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: 250,

    backgroundColor: "#1b2631",

    marginRight: SPACING,

    borderRadius: 20,
  },
});
