import { View } from "react-native";
import styles from "../properties/stylesheet";
import TopNavBar from "./top_NavBar";

export default function Index() {
  return (
    <View style={styles.container}>
      <TopNavBar />
    </View>
  );
}
