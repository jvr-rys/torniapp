import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import OrdersScreen from "./OrdersScreen";
import HomeScreen from "./HomeScreen"; // La pantalla con el botón
import CreateOrderScreen from "./CreateOrderScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Orders" component={OrdersScreen} />
        <Stack.Screen name="CreateOrder" component={CreateOrderScreen} options={{ title: "Nueva Orden" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
