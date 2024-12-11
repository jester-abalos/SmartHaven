import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function IndexScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to</Text>
      <View style={styles.logoContainer}>
        <Text style={styles.appName}>Smart Lock</Text>
        <Image
          source={require('../images/asd.png')}
          style={styles.icon}
        />
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Login")} // Example navigation
      >
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate("Signup")} // Example navigation
      >
        <Text style={styles.buttonText}>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C23225", // Red gradient background
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
  },
  appName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  icon: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  loginButton: {
    backgroundColor: "green",
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 5,
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: "black",
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});


