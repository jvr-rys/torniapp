import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#1F2937",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    paddingTop: 8,
  },
  detailText: {
    fontSize: 14,
    color: "#4B5563",
    marginVertical: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#374151",
  },
  input: {
    borderWidth: 2,
    borderColor: "#000000", // Borde negro por defecto
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
  },
  inputFocused: {
    borderColor: "#007bff", // Azul al enfocarse
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  pickerContainer: {
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
  },
  
});
