import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styles from "../properties/stylesheet"
import TopNavBar from './top_NavBar'
import { Link } from "expo-router"

export class menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TopNavBar />
        <View style={styles.menu_container}>
          <Link href="/root/tabs/living_room">
            <View style={styles.menu_card}>
              <View style={styles.menu_image_container}>
                <Image source={require("../../../assets/icons/Home.png")} style={styles.menu_image}/>
              </View>
              <Text style={styles.menu_texts}> Living Room </Text>
            </View>
          </Link>

          <View style={styles.menu_card}>
            <View style={styles.menu_image_container}>
              <Image source={require("../../../assets/icons/Bedroom.png")} style={styles.menu_image}/>
            </View>
            <Text style={styles.menu_texts}> Bed Room </Text>
          </View>
        </View>
      </View>
    )
  }
}

export default menu
