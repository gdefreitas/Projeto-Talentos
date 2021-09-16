import React from "react";
import { View, Text } from "react-native";
import Bar from "../../components/Bar";
import Pagination from "../../components/Pagination";
import styles from "./styles";

function Historic() {
  return (
    <View style={styles.container}>
      <Bar>Historico</Bar>
      <Text>oi</Text>
      <Pagination/>
    </View>
  );
}

export default Historic;
