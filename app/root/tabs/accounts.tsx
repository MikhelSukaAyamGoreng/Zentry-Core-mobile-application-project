import React from "react";
import { View } from "react-native";
import styles from "../properties/stylesheet";
import TopNavBar from "./top_NavBar";

const accounts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.accountContainer}></View>
      <TopNavBar />
    </View>
  );
};

export default accounts;
