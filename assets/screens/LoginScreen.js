import React, { useState } from 'react';
import { ScrollView, Image, Pressable, View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

function LoginScreen() {
  const navigation = useNavigation();
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#FFF"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            placeholderTextColor="#FFF"
            secureTextEntry={!showPassword}
          />
          <Pressable
            onPress={() => setShowPassword(!showPassword)}
            style={styles.iconContainer}
          >
            <MaterialIcons
              name={showPassword ? 'visibility' : 'visibility-off'}
              size={24}
              color="#FFF"
            />
          </Pressable>
        </View>

        <View style={styles.checkboxContainer}>
          <Pressable
            style={styles.checkbox}
            onPress={() => setRememberMe(!rememberMe)}
          >
            {rememberMe && <MaterialIcons name="check" size={20} color="white" />}
          </Pressable>
          <Text style={styles.rememberMeText}>Remember Me</Text>
        </View>

        {/* Log In Button */}
        <Pressable
          style={({ pressed }) => [styles.loginButton, pressed && styles.loginButtonPressed]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.loginButtonText}>Log In</Text>
        </Pressable>

        <View style={styles.separatorLine} />

        <View style={styles.noAccountContainer}>
          <Text style={styles.noAccountText}>Don't Have an Account?</Text>
        </View>

        {/* Create Account Button */}
        <Pressable
          style={({ pressed }) => [styles.createButton, pressed && styles.createButtonPressed]}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.createButtonText}>Signup</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#C23225',
  },
  scrollContainer: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginTop: 400,
  },
  input: {
    width: '80%',
    height: 50,
    color: '#E0E0E0',
    backgroundColor: '#000000',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    shadowColor: '#000', // iOS shadow color
    shadowOffset: { width: 6, height: 6 }, // iOS shadow offset
    shadowOpacity: 0.2, // iOS shadow opacity
    shadowRadius: 3, // iOS shadow blur
    alignSelf: 'center',
    borderColor: 'gray',
    borderWidth: 1,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    color: '#E0E0E0',
    backgroundColor: '#000000',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 6, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    alignSelf: 'center',
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 8,
    color: '#E0E0E0',
  },
  iconContainer: {
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 15,
    marginLeft: 50,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  rememberMeText: {
    color: '#FFF',
    fontSize: 16,
  },
  loginButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#0CAC04',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 38,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  loginButtonPressed: {
    backgroundColor: '#996600',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  separatorLine: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginTop: 20,
    marginHorizontal: 30,
  },
  noAccountContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  noAccountText: {
    fontSize: 16,
    color: '#fff',
  },
  createButton: {
    width: '50%',
    height: 50,
    backgroundColor: '#B17900',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  createButtonPressed: {
    backgroundColor: '#996600',
  },
  createButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
