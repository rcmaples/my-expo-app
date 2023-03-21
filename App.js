import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { HuzzahText } from "./components/HuzzahText/HuzzahText";

import { Success } from "./components/Success";
import { WelcomeText } from "./components/WelcomeText";

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeText />
      <Success />
      <HuzzahText />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
