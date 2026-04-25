import { BlurView } from "expo-blur";
import React, { useState } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import styles from "../properties/stylesheet";

const LivingRoom = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [track] = useState(0);

  const addModule = () => {};

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
        <TouchableOpacity
          onPress={() => setIsModalVisible(true)}
          style={{ width: "100%" }}
        >
          <View style={styles.room_card}>
            <View style={styles.menu_image_container}></View>
            <Text style={styles.menu_texts}> module {track}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <View style={styles.room_card}>
            <View style={styles.menu_image_container}></View>
            <Text style={styles.menu_texts}> module {track} </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Modal moved outside everything, at the bottom of the root View */}
      <Modal visible={isModalVisible} transparent={true} animationType="fade">
        <BlurView
          intensity={100}
          tint="dark"
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.module_container}>
            <TouchableOpacity
              onPress={() => setIsModalVisible(false)}
              style={{ paddingVertical: 20 }}
            >
              <Text style={styles.addmodule_color}> Close </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addModule()}>
              <Text style={styles.addmodule_color}> Add Module </Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </Modal>
    </View>
  );
};

export default LivingRoom;
