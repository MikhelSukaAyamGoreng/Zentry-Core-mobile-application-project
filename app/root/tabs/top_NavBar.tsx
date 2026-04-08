import React from "react";
import { Text, View } from "react-native";
import styles from "../properties/stylesheet";
import { Link } from "expo-router";


const TopNavBar = () => {
  return (
    <View style={styles.topnav_container}>
      <View style={styles.topnav_left}>
        <Link href="/root/tabs/menu">
          <Text> Menu </Text>
        </Link>
      </View>
      <View style={styles.topnav_right}>
        <Text> PlaceHolder Right</Text>
      </View>
    </View>
  );
};

export default TopNavBar;
