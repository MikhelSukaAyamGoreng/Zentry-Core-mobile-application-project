import React, { Component } from "react";
import { Image, Text, View } from "react-native";
import styles from "../properties/stylesheet";

export class living_room extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menu_container}>
          <View style={styles.menu_card_room}>
            <View style={styles.room_image_container}>
              <Image
                source={require("../../../assets/icons/Home.png")}
                style={styles.room_image}
              />
            </View>
            <Text style={styles.room_title_text}>Living Room</Text>
          </View>
        </View>

        <View style={styles.room_container}>
          <View style={styles.menu_card}>
            <View style={styles.menu_image_container}>
              <Image
                source={require("../../../assets/icons/Home.png")}
                style={styles.menu_image}
              />
            </View>
            <Text style={styles.menu_texts}> Living Room </Text>
          </View>

          <View style={styles.menu_card}>
            <View style={styles.menu_image_container}>
              <Image
                source={require("../../../assets/icons/Bedroom.png")}
                style={styles.menu_image}
              />
            </View>
            <Text style={styles.menu_texts}> Bed Room </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default living_room;
