import { BlurView } from "expo-blur";
import { Link } from "expo-router";
import React, { Component } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import styles from "../properties/stylesheet";
import TopNavBar from "./top_NavBar";

export class menu extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/background_menu.jpg")}
        style={styles.background_index}
      >
        <BlurView
          tint="dark"
          intensity={50}
          style={{ width: "100%", height: "100%" }}
        >
          <TopNavBar />
          <View style={styles.menu_container}>
            <BlurView intensity={30} tint="dark">
              <Link href="/root/tabs/living_room">
                <View style={styles.menu_card}>
                  <View style={styles.menu_image_container}>
                    <Image
                      source={require("../../../assets/icons/Home.png")}
                      style={styles.menu_image}
                    />
                  </View>
                  <Text style={styles.menu_texts}> Living Room </Text>
                </View>
              </Link>
            </BlurView>

            <BlurView intensity={30} tint="dark">
              <View style={styles.menu_card}>
                <View style={styles.menu_image_container}>
                  <Image
                    source={require("../../../assets/icons/Bedroom.png")}
                    style={styles.menu_image}
                  />
                </View>
                <Text style={styles.menu_texts}> Bed Room </Text>
              </View>
            </BlurView>
          </View>
        </BlurView>
      </ImageBackground>
    );
  }
}

export default menu;
