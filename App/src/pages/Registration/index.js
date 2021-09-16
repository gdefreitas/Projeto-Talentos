import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles.js";
import Bar from "../../components/Bar";
import UpLoad from "../../assets/cloud_upload_white_48dp.svg";
import { Button, TextInput } from "react-native-paper";
import { Cinza } from "../../styles/index.js";

function Registration() {
  const [produto, setProduto] = useState("");
  const [marca, setMarca] = useState("");
  const [codigo, setCodigo] = useState("");
  const [modelo, setModelo] = useState("");
  return (
    <View style={styles.container}>
      <Bar>Cadastro</Bar>
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Produto"
        value={produto}
        onChangeText={(text) => setProduto(text)}
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Marca"
        value={marca}
        onChangeText={(text) => setMarca(text)}
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Codigo"
        value={codigo}
        onChangeText={(text) => setCodigo(text)}
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Modelo"
        value={modelo}
        onChangeText={(text) => setModelo(text)}
      />
      <TouchableOpacity
        style={styles.upload}
        onPress={() => console.log("Pressed")}
        activeOpacity={0.8}
      >
        <UpLoad fill={Cinza} height="100" width="100" />
        <Text style={styles.uploadText}>Carregar Foto</Text>
      </TouchableOpacity>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </Button>
    </View>
  );
}

export default Registration;
