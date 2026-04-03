import React from "react";
import { Text, View } from "react-native";
import styles from "../properties/stylesheet";

const TopNavBar = () => {
  return (
    <View style={styles.topnav_container}>
      <View style={styles.topnav_left}>
        <Text> PlaceHolder Left </Text>
      </View>
      <View style={styles.topnav_right}>
        <Text> PlaceHolder Right</Text>
      </View>
    </View>
  );
};

export default TopNavBar;
