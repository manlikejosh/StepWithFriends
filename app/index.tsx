import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import useHealthData from "./hooks/useHealthData";
import { Link } from "expo-router";

export default function App() {
  const { steps, distance, flights } = useHealthData();

  console.log(`Steps: ${steps} | Distance: ${distance}m | Flights: ${flights}`);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Step With Friends</Text>
      
      <View style={styles.dataContainer}>
        <Text style={styles.dataText}>Steps: {steps}</Text>
        <Text style={styles.dataText}>Distance: {distance}m</Text>
        <Text style={styles.dataText}>Flights: {flights}</Text>
      </View>
      
      <View style={styles.linksContainer}>
        <Link href="/Profile" asChild>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkText}>Go to Profile</Text>
          </TouchableOpacity>
        </Link>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  dataContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  dataText: {
    fontSize: 16,
    marginBottom: 8,
    color: "#555",
  },
  linksContainer: {
    width: "100%",
    gap: 15,
  },
  linkButton: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  linkText: {
    fontSize: 16,
    color: "#555",
    fontWeight: "500",
  },
  primaryButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  primaryButtonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
  },
});
