import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Bar from "../../components/Bar";
import styles from "./styles";
import Scan from "../../assets/qr_code_scanner_white_48dp.svg";
import Search from "../../assets/search_white_48dp.svg";
import Register from "../../assets/app_registration_white_48dp.svg";
import Remove from "../../assets/highlight_off_white_48dp.svg";
import { Cinza } from "../../styles";

function Home() {
  return (
    <View style={styles.container}>
      <Bar home>Controle de Patrimonio</Bar>
      <TouchableOpacity style={styles.card}  activeOpacity={0.8}>
        <Scan fill={Cinza}/>
        <Text style={styles.cardText}>Escanear</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}  activeOpacity={0.8}>
        <Search fill={Cinza}/>
        <Text style={styles.cardText}>Procurar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}  activeOpacity={0.8}>
        <Register fill={Cinza}/>
        <Text style={styles.cardText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}  activeOpacity={0.8}>
        <Remove fill={Cinza}/>
        <Text style={styles.cardText}>Despachar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
