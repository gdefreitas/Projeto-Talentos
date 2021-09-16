import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Historic from "./src/pages/Historic";
import Refound from "./src/pages/RefoundScreen";
import Withdraw from "./src/pages/WithdrawScreen";
import styles, { theme } from "./src/styles";

export default function App() {

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Withdraw />
      </View>
    </PaperProvider>
  );
}
