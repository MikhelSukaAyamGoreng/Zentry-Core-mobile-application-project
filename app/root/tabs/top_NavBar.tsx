import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import styles from "../properties/stylesheet";

const TopNavBar = () => {
  return (
    <View style={styles.topnav_wrapper}>
      <View style={styles.topnav_container}>
        <View style={styles.topnav_left}>
          <Link href="/root/tabs/menu">
            <Text> Menu </Text>
          </Link>
        </View>
        <View style={styles.topnav_right}>
          <Link href="/root/tabs/accounts">
            <Text>Account's Page</Text>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default TopNavBar;
