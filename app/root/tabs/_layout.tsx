import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { fontAssets } from "../properties/font";

export default function RootLayout() {
  const [fontloaded] = useFonts(fontAssets);
  if (!fontloaded) return null;
  return <Slot />;
}
