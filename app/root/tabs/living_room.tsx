import React, { useState } from "react";
import {
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../properties/stylesheet";

const LivingRoom = () => {
  const [addModalvisible, setAddModalVisible] = useState(false);
  const [moduleName, setModuleName] = useState(``);
  const [moduleDescription, setModuleDescription] = useState(``);
  const [warningModalVisible, setWarningModalVisible] = useState(false);

  const CreateMoel = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.menu_container}>
        <View style={styles.menu_card_room}>
          <View style={styles.room_image_container}>
            <TouchableOpacity onPress={() => setAddModalVisible(true)}>
              <Image
                source={require("../../../assets/icons/Home.png")}
                style={styles.room_image}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.room_title_text}>Living Room</Text>
        </View>
      </View>

      <View style={styles.AddModelContainer}>
        <View style={styles.AddModelWrapper}>
          <Text style={styles.AddModelText}> Module Name {moduleName} </Text>
          <View style={styles.AddModuleCamera}>
            <Text style={styles.AddModelText}> Camera</Text>
          </View>
          <View style={styles.AddModuleDescriptionMenu}>
            <TouchableOpacity
              style={styles.AddModelDescriptionText}
              onPress={() => setWarningModalVisible(true)}
            >
              <Text style={styles.AddModelText2}> Warning</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.AddModelDescriptionText2}>
              <Text style={styles.AddModelText2}> Camera </Text>
            </TouchableOpacity>
            <Text style={styles.AddModelText3}> Safe </Text>
          </View>
        </View>
      </View>

      <Modal
        visible={warningModalVisible}
        transparent={false}
        animationType="fade"
      >
        <View style={styles.warningModalContainer}>
          <View style={styles.warningModalWrapper}>
            <Text style={styles.warningModalText}> Warning 1</Text>
          </View>
        </View>
      </Modal>

      <Modal visible={addModalvisible} transparent={true} animationType="fade">
        <View style={styles.addModuleContainer2}>
          <View style={styles.addModuleWrapper2}>
            <TouchableOpacity
              onPress={() => setAddModalVisible(false)}
              style={styles.addModuleCloseButton}
            >
              <Text style={styles.addModuleText}> Close </Text>
            </TouchableOpacity>
            <View
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                marginVertical: 10,
              }}
            ></View>
            <Text style={styles.addModuleText}> Module Name </Text>
            <TextInput
              style={styles.ModuleTextInput}
              placeholder="message"
              onChangeText={(newtext) => setModuleName(newtext)}
            />
            <Text style={styles.addModuleText}> Module Description</Text>
            <TextInput
              style={styles.ModuleTextInput}
              placeholder="Description"
              multiline
              onChangeText={(newtext) => setModuleDescription(newtext)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LivingRoom;
