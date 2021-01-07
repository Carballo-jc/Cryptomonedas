import React, { useEffect, useState } from "react";
import { Text, StyleSheet, Platform, View } from "react-native";
import * as Font from "expo-font";

const Header = () => {
  //   //cargar una fuente externa
  //   const [fontsLoaded, setFontsLoaded] = useState(false);
  //   useEffect(() => {
  //     if (!fontsLoaded) {
  //       loadFonts();
  //     }
  //   });
  //   const loadFonts = async () => {
  //     await Font.loadAsync({
  //       "Lato-Black": require(".././assets/fonts/Lato-Black.ttf"),
  //     });
  //     setFontsLoaded(true);
  //   };
  //   //hasta aqui el etodo de la fuente

  return <Text style={styles.title}>Cryptomonedas</Text>;
};
const styles = StyleSheet.create({
  title: {
    paddingTop: Platform.OS === "ios" ? 60 : 50,
    paddingBottom: 20,
    backgroundColor: "#5e49e2",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#fff",
    marginBottom: 30,
  },
});

export default Header;
