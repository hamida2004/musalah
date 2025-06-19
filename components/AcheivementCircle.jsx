import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { colors } from "../assets/style"; // Assuming you have a color palette

const AchievementCircle = ({ percentage, color }) => {
  return (
    <View
      style={{ ...styles.container}}
    >
      <AnimatedCircularProgress
        size={100}
        width={8}
        fill={percentage}
        tintColor={color} 
      >
        {() => <Text style={styles.percentageText}>{`${percentage} %`}</Text>}
      </AnimatedCircularProgress>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  percentageText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.dark, // Text color
  },
});

export default AchievementCircle;
