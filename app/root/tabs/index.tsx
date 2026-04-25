import { ImageBackground } from "react-native";
import styles from "../properties/stylesheet";
import TopNavBar from "./top_NavBar";

export default function Index() {
  return (
    <ImageBackground
      source={require("../../../assets/images/background_index.jpg")}
      style={styles.background_index}
    >
      <TopNavBar />
    </ImageBackground>
  );
}
