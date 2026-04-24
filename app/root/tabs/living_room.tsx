import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../properties/stylesheet";

export class living_room extends Component {
  state = {
    track: 0,
  };

  addModule = () => {
  };

  render() {
    const { track } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.menu_container}>
          <View style={styles.menu_card_room}>
            <View style={styles.room_image_container}>
              <TouchableOpacity onPress={this.addModule}>
                <Image
                  source={require("../../../assets/icons/Home.png")}
                  style={styles.room_image}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.room_title_text}>Living Room</Text>
          </View>
        </View>

        <View style={styles.room_container}>
          <View style={styles.room_card}>
            <View style={styles.menu_image_container}></View>
            <Text style={styles.menu_texts}> module {track}</Text>
          </View>

          <View style={styles.room_card}>
            <View style={styles.menu_image_container}></View>\
            <Text style={styles.menu_texts}> module {track} </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default living_room;
