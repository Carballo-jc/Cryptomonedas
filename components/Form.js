import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Picker } from "react-native";
import axios from "axios";

const Form = () => {
  const [moneda, setMoneda] = useState("");
  const [cryptocurrency, setCryptocurrency] = useState("");
  const [cryptocurrencys, setCryptocurrencys] = useState([]);

  const consultaApi = async () => {
    const url =
      "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD";
    const result = await axios.get(url);
    const respuesta = await result.data.Data;
    console.log(respuesta);
    // if (!Object.keys(respuesta)) return null;
    setCryptocurrencys(respuesta);
  };
  useEffect(() => {
    consultaApi();
  }, []);

  const getMoneda = (moneda) => {
    setMoneda(moneda);
    console.log(moneda);
  };
  const getCrypto = (crypto) => {
    setCryptocurrency(crypto);
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
        {cryptocurrencys.map((crypto) => {
          const { FullName, Id, Name } = crypto.CoinInfo;
          return <Picker.Item key={Id} label={FullName} value={Name} />;
        })}
      </Picker>
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    textTransform: "uppercase",
    fontSize: 22,
    marginVertical: 20,
  },
});
export default Form;
