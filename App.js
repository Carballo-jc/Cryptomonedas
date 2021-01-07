import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Form from "./components/Form";
import Header from "./components/Header";

export default function App() {
  return (
    <View>
      <Header />
      <Image
        style={styles.image}
        source={require("./assets/img/cryptomonedas.png")}
      />
      <View style={styles.contentForm}>
        <Form />
      </View>
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
  contentForm: {
    marginHorizontal: "2.5%",
  },
  image: {
    width: "100%",
    height: 150,
    marginHorizontal: "2.5%",
  },
});
