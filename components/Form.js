import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  onPress,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import useCoins from "../hooks/useCoins";

const Form = ({
  moneda,
  cryptocurrency,
  setMoneda,
  setCryptocurrency,
  setGetApi,
}) => {
  const [{ coinsFilter }] = useCoins();
  // const [cryptocurrencys, setCryptocurrencys] = useState([]);

  // const consultaApi = async () => {
  //   const url =
  //     "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD";
  //   const result = await axios.get(url);
  //   const respuesta = await result.data.Data;
  //   setCryptocurrencys(respuesta);
  // };
  // useEffect(() => {
  //   consultaApi();
  // }, []);

  const getMoneda = (moneda) => {
    setMoneda(moneda);
  };
  const getCrypto = (crypto) => {
    setCryptocurrency(crypto);
  };
  const getQuote = () => {
    if (moneda === "" || cryptocurrency === "") {
      showAlert();
      console.log("Mostrando alerta");
      return;
    }

    //cambiar el state de consultar la api
    setGetApi(true);
  };
  const showAlert = () => {
    Alert.alert("Error...", "Ambos Campos Son Obligatorios", [{ text: "ok" }]);
  };
  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        selectedValue={moneda}
        onValueChange={(moneda) => getMoneda(moneda)}
      >
        <Picker.Item label={"- Seleccione -"} value={""} />
        <Picker.Item label={"Dolar Estados Unidos"} value={"USD"} />
        <Picker.Item label={"Peso Mexicado"} value={"MXN"} />
        <Picker.Item label={"Euro"} value={"EUR"} />
        <Picker.Item label={"Libra Esterlina"} value={"GBP"} />
      </Picker>
      <Text style={styles.label}>Cryptomoneda</Text>
      <Picker
        selectedValue={cryptocurrency}
        onValueChange={(crypto) => getCrypto(crypto)}
      >
        <Picker.Item label={"- Seleccione -"} value={""} />
        {coinsFilter.map((crypto) => {
          const { FullName, Id, Name } = crypto.CoinInfo;
          return <Picker.Item key={Id} label={FullName} value={Name} />;
        })}
      </Picker>
      <TouchableHighlight
        onPress={(crypto) => getQuote(crypto)}
        style={styles.btnCotizar}
      >
        <Text style={styles.btnText}>Cotizar</Text>
      </TouchableHighlight>
    </View>
  );
};;;
const styles = StyleSheet.create({
  label: {
    textTransform: "uppercase",
    fontSize: 22,
    marginVertical: 20,
  },
  btnCotizar: {
    backgroundColor: "#5e49e2",
    padding: 10,
    marginTop: 20,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    textTransform: "uppercase",
    textAlign: "center",
  },
});
export default Form;
