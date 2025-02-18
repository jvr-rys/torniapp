import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./styles";

const CreateOrderScreen = ({ navigation }: any) => {
  const [order, setOrder] = useState({
    folio: "",
    fecha: "",
    cliente: "",
    descripcion: "",
    piezas: "",
    asignado: "",
    estado: "Pendiente",
    facturacion: "",
    metodoPago: "",
  });

  const handleChange = (key: string, value: string) => {
    setOrder({ ...order, [key]: value });
  };

  const handleSubmit = () => {
    if (!order.folio || !order.cliente || !order.descripcion) {
      Alert.alert("Error", "Por favor, llena todos los campos requeridos.");
      return;
    }

    console.log("Orden creada:", order);
    Alert.alert("Éxito", "Orden creada correctamente.");
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Crear Orden de Compra</Text>

        <Text style={styles.label}>Folio</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. OC-003"
          onChangeText={(text) => handleChange("folio", text)}
        />

        <Text style={styles.label}>Fecha</Text>
        <TextInput
          style={styles.input}
          placeholder="YYYY-MM-DD"
          onChangeText={(text) => handleChange("fecha", text)}
        />

        <Text style={styles.label}>Cliente</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre del cliente"
          onChangeText={(text) => handleChange("cliente", text)}
        />

        <Text style={styles.label}>Descripción del trabajo</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. Fabricación de piezas"
          onChangeText={(text) => handleChange("descripcion", text)}
        />

        <Text style={styles.label}>Piezas</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Cantidad"
          onChangeText={(text) => handleChange("piezas", text)}
        />

        <Text style={styles.label}>Asignado a</Text>
        <View style={styles.pickerContainer}>
        <Picker
            selectedValue={order.estado}
            onValueChange={(itemValue) => handleChange("estado", itemValue)}
          >
            <Picker.Item label="Por asignar" value="PorAsig" />
            <Picker.Item label="Soldadura" value="Soldadura" />
            <Picker.Item label="Maquilados" value="Maquilados" />
            
          </Picker>
          </View>

        <Text style={styles.label}>Estado</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={order.estado}
            onValueChange={(itemValue) => handleChange("estado", itemValue)}
          >
            <Picker.Item label="Por asignar" value="PorAsignar" />
            <Picker.Item label="Finalizado" value="Finalizado" />
            <Picker.Item label="En proceso" value="En proceso" />
            <Picker.Item label="Proceso pavonado" value="ProcesoPavonado" />
            <Picker.Item label="Pendiente" value="Pendiente" />
            <Picker.Item label="Parcial" value="Parcial" />
            
          </Picker>
        </View>

        <Text style={styles.label}>Facturación</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => handleChange("facturacion", text)}
        />

        <Text style={styles.label}>Método de Pago</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. Transferencia"
          onChangeText={(text) => handleChange("metodoPago", text)}
        />

        <View style={styles.buttonContainer}>
          <Button title="Crear Orden" onPress={handleSubmit} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateOrderScreen;
