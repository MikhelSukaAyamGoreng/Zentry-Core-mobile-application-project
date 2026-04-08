import { Dimensions, StyleSheet } from "react-native";
import { fonts } from "./font";

const { width, height } = Dimensions.get("window");

const colors = {
  platinum: "#E5E5E5",
  battleshipGray: "#8A8B8E",
  jet: "#2F3136",
  royalBlue: "#2764F3",
  marianBlue: "#163C90",
};

const font_sizes = {
  big: 45,
  mid: 25,
  regular: 13,
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.jet,
  },
  topnav_container: {
    backgroundColor: colors.battleshipGray,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.01,
    marginTop: height * 0.05,
    marginHorizontal: width * 0.05,
    borderRadius: 6,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topnav_left: {},
  topnav_right: {},
  topnav_text: {
    fontFamily: fonts.bold,
    fontSize: font_sizes.regular,
  },
  menu_container: {
    marginHorizontal: width * 0.05,
    marginVertical: height * 0.05,
    flexDirection: "column",
    gap: width * 0.05,
    flexWrap: "wrap",
  },
  menu_card: {
    borderColor: colors.battleshipGray,
    borderWidth: 1,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 15,
    width: "100%",
    height: 120,
  },
  menu_texts: {
    fontFamily: fonts.bold,
    color: colors.platinum,
  },
  menu_image_container: {
    backgroundColor: colors.jet,
    padding: 10,
    borderRadius: 6,
    marginRight: 15,
  },
  menu_image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  main: {
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.03,
    color: colors.platinum,
    fontSize: font_sizes.regular,
    fontFamily: fonts.regular,
  },
});