import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Quotation = ({ dataapi }) => {
  if (Object.keys(dataapi).length === 0) return null;
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = dataapi;
  // console.log(dataapi);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.price}>{PRICE}</Text>
      </Text>
      <Text style={styles.text}>
        Precio mas Alto de dia:{""}
        <Text style={styles.span}>{HIGHDAY}</Text>
      </Text>
      <Text style={styles.text}>
        Precio Mas Bajo del Dia:{""}
        <Text style={styles.span}>{LOWDAY}</Text>
      </Text>
      <Text style={styles.text}>
        Varaicion Ultimas 24 Horas:{""}
        <Text style={styles.span}>{CHANGEPCT24HOUR}</Text>
      </Text>

      <Text style={styles.text}>
        Ultima Actualizacion:{""}
        <Text style={styles.span}>{LASTUPDATE}</Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5e49e2",
    padding: 20,
    marginTop: 10,
  },
  span: {},
  price: {
    fontSize: 30,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Quotation;
