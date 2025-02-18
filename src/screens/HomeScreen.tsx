import React from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a TorniApp</Text>
    
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => navigation.navigate("Orders")}
      >
        <Text style={styles.buttonText}>Ver Órdenes</Text>
      </Pressable>
        

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => navigation.navigate("CreateOrder")}
      >
        <Text style={styles.buttonText}>Crear Órden</Text>
      </Pressable>
    </View>
  );
}
