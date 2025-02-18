import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { ChevronDown, ChevronUp, PlusCircle } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

const ordersData = [
  {
    id: "1",
    folio: "OC-001",
    fecha: "2025-02-09",
    cliente: "Empresa X",
    descripcion: "Fabricación de piezas metálicas",
    piezas: 100,
    asignado: "Juan Pérez",
    estado: "En proceso",
    facturacion: "$15,000",
    metodoPago: "Transferencia",
    materiales: "Acero inoxidable",
    prioridad: "Alta",
    comentarios: "Entrega urgente para el 15 de febrero",
  },
  {
    id: "2",
    folio: "OC-002",
    fecha: "2025-02-08",
    cliente: "Empresa Y",
    descripcion: "Torno y fresado",
    piezas: 50,
    asignado: "María Gómez",
    estado: "Pendiente",
    facturacion: "$8,500",
    metodoPago: "Tarjeta de crédito",
    materiales: "Aluminio",
    prioridad: "Media",
    comentarios: "Validar especificaciones con el cliente",
  },
];

const getEstadoColor = (estado: string) => {
  switch (estado) {
    case "Pendiente":
      return "#F59E0B"; // Amarillo
    case "En proceso":
      return "#3B82F6"; // Azul
    case "Finalizado":
      return "#10B981"; // Verde
    default:
      return "#6B7280"; // Gris
  }
};

const OrdersScreen = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [orders, setOrders] = useState(ordersData);
  const navigation = useNavigation();

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleChangeEstado = (id: string) => {
    Alert.alert(
      "Cambiar Estado",
      "Selecciona el nuevo estado:",
      [
        {
          text: "Pendiente",
          onPress: () => updateEstado(id, "Pendiente"),
        },
        {
          text: "En proceso",
          onPress: () => updateEstado(id, "En proceso"),
        },
        {
          text: "Finalizado",
          onPress: () => updateEstado(id, "Finalizado"),
        },
        { text: "Cancelar", style: "cancel" },
      ],
      { cancelable: true }
    );
  };

  const updateEstado = (id: string, nuevoEstado: string) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, estado: nuevoEstado } : order
      )
    );
    Alert.alert("Estado actualizado", `Nuevo estado: ${nuevoEstado}`);
  };

  const handlePrintOrder = (order: any) => {
    console.log("Imprimiendo orden:", order);
    Alert.alert("Impresión", `Orden ${order.folio} enviada a imprimir.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Órdenes de Compra</Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Pressable onPress={() => toggleExpand(item.id)} style={styles.header}>
              <Text style={styles.headerText}>
                {item.folio} - {item.cliente}
              </Text>
              {expandedId === item.id ? (
                <ChevronUp size={20} color="#374151" />
              ) : (
                <ChevronDown size={20} color="#374151" />
              )}
            </Pressable>

            {expandedId === item.id && (
              <View style={styles.details}>
                <Text style={styles.detailText}>📅 Fecha: {item.fecha}</Text>
                <Text style={styles.detailText}>📝 Descripción: {item.descripcion}</Text>
                <Text style={styles.detailText}>📦 Piezas: {item.piezas}</Text>
                <Text style={styles.detailText}>🛠 Materiales: {item.materiales}</Text>
                <Text style={styles.detailText}>🚀 Prioridad: {item.prioridad}</Text>
                <Text style={styles.detailText}>👨‍🔧 Asignado a: {item.asignado}</Text>
                <Text style={[styles.detailText, { color: getEstadoColor(item.estado) }]}>
                  🔵 Estado: {item.estado}
                </Text>
                <Text style={styles.detailText}>💰 Facturación: {item.facturacion}</Text>
                <Text style={styles.detailText}>💳 Método de pago: {item.metodoPago}</Text>
                <Text style={styles.detailText}>💬 Comentarios: {item.comentarios}</Text>

                {/* Botones de acciones */}
                <View style={styles.actionsContainer}>
                  <TouchableOpacity
                    style={[styles.actionButton, { backgroundColor: "#F59E0B" }]}
                    onPress={() => handleChangeEstado(item.id)}
                  >
                    <Text style={styles.actionButtonText}>Editar Estado</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.actionButton, { backgroundColor: "#10B981" }]}
                    onPress={() => handlePrintOrder(item)}
                  >
                    <Text style={styles.actionButtonText}>Imprimir Orden</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.createButton}
        onPress={() => navigation.navigate("CreateOrder")}
      >
        <PlusCircle size={24} color="white" />
        <Text style={styles.createButtonText}>Crear Orden</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F3F4F6",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 16,
    textAlign: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1F2937",
  },
  details: {
    marginTop: 10,
  },
  detailText: {
    fontSize: 14,
    color: "#374151",
    marginVertical: 2,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  actionButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: "center",
    marginHorizontal: 4,
  },
  actionButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  createButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2563EB",
    padding: 12,
    borderRadius: 8,
    justifyContent: "center",
    marginTop: 20,
  },
  createButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
});

export default OrdersScreen;
