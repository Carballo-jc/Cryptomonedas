import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View, Image } from "react-native";
import Form from "./components/Form";
import Header from "./components/Header";
import Quotation from "./components/Quotation";
// import axios from "axios";

export default function App() {
  const [moneda, setMoneda] = useState("");
  const [cryptocurrency, setCryptocurrency] = useState("");
  const [getapi, setGetApi] = useState(false);
  const [dataapi, setDataApi] = useState({});
  // console.log(moneda);
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${moneda}`;
  const getCryptoCurrency = () => {
    if (getapi) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setGetApi(false);
          setDataApi(data.DISPLAY[cryptocurrency][moneda]);
        });
    }
  };
  useEffect(() => {
    getCryptoCurrency();
  }, [getapi]);
  return (
    <ScrollView>
      <Header />
      <Image
        style={styles.image}
        source={require("./assets/img/cryptomonedas.png")}
      />
      <View style={styles.contentForm}>
        <Form
          modena={moneda}
          cryptocurrency={cryptocurrency}
          setCryptocurrency={setCryptocurrency}
          setMoneda={setMoneda}
          setGetApi={setGetApi}
        />
      </View>
      <Quotation dataapi={dataapi} />
    </ScrollView>
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
