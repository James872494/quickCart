// SignUpAuth.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { supabase } from "../../Supabase/supabaseClient";

const SignUpAuth = () => {
  const [step, setStep] = useState<number>(1); // 1 = Email, 2 = Password
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isNewsletterChecked, setIsNewsletterChecked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleBack = () => {
    if (step === 2) setStep(1);
    else router.back();
  };

  const handleContinue = async () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (!password || password.length < 6) {
        Alert.alert("Error", "Password must be at least 6 characters.");
        return;
      }

      setLoading(true);
      try {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { newsletter: isNewsletterChecked },
          },
        });

        if (error) {
          Alert.alert("Signup Failed", error.message);
        } else {
          Alert.alert("Success", "Check your email to confirm your account!");
          router.push("/auth/Success");
        }
      } catch (err) {
        console.error(err);
        Alert.alert("Signup Failed", "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <View style={styles.Androidcontainer}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
        >
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
              <MaterialIcons name="arrow-back" size={40} color="#000" />
            </TouchableOpacity>
          </View>

          {/* Content */}
          <View style={styles.content}>
            {step === 1 ? (
              <>
                {/* Email Step */}
                <View style={styles.textContainer}>
                  <MaterialIcons name="alternate-email" size={40} color="#AAA" />
                  <Text style={styles.title}>Get going with email</Text>
                  <Text style={styles.description}>
                    It&#39;s helpful to provide a good reason for why the email address is required.
                  </Text>
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.emailInput}
                    placeholder="Email address"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoFocus
                  />
                </View>
                <TouchableOpacity
                  style={styles.checkboxContainer}
                  onPress={() => setIsNewsletterChecked(!isNewsletterChecked)}
                >
                  <View style={[styles.checkbox, isNewsletterChecked && styles.checkboxChecked]}>
                    {isNewsletterChecked && <Text style={styles.checkmarkIcon}>✓</Text>}
                  </View>
                  <Text style={styles.checkboxText}>
                    Stay up to date with the latest news and resources delivered directly to your inbox
                  </Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                {/* Password Step */}
                <View style={{ alignItems: "center", marginBottom: 20 }}>
                  <MaterialIcons name="lock" size={48} color="#AAA" />
                </View>
                <Text style={styles.title}>Your password</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.passwordInput}
                    placeholder="Enter password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!isPasswordVisible}
                    maxLength={20}
                  />
                  <TouchableOpacity style={styles.eyeButton} onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                    <View style={styles.eyeIcon}>
                      <View style={styles.eyeOuter} />
                      <View style={styles.eyeInner} />
                      {!isPasswordVisible && <View style={styles.eyeSlash} />}
                    </View>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>

          {/* Continue Button */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.continueButton,
                loading || (step === 1 && !email) || (step === 2 && password.length < 6)
                  ? styles.continueButtonDisabled
                  : null,
              ]}
              disabled={loading || (step === 1 && !email) || (step === 2 && password.length < 6)}
              onPress={handleContinue}
            >
              <Text style={styles.continueButtonText}>
                {loading ? "Signing Up..." : "Continue"}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  Androidcontainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  content: { flex: 1, paddingHorizontal: 20, marginBottom: 80 },
  header: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 20 },
  backButton: { width: 40, height: 40, alignItems: "center", justifyContent: "center" },
  textContainer: { marginBottom: 40 },
  title: { fontSize: 28, fontWeight: "bold", color: "#333", marginBottom: 12 },
  description: { fontSize: 16, color: "#666", lineHeight: 24 },
  inputContainer: { marginBottom: 30, position: "relative" },
  emailInput: {
    borderWidth: 2,
    borderColor: "#007AFF",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  checkboxContainer: { flexDirection: "row", alignItems: "flex-start", marginBottom: 40 },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#CCC",
    borderRadius: 4,
    marginRight: 12,
    marginTop: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  checkboxChecked: { backgroundColor: "#007AFF", borderColor: "#007AFF" },
  checkboxText: { flex: 1, fontSize: 14, color: "#666", lineHeight: 20 },
  checkmarkIcon: { fontSize: 14, color: "#fff", fontWeight: "bold" },
  buttonContainer: { paddingHorizontal: 20, paddingBottom: 20 },
  continueButton: {
    backgroundColor: "#00C851",
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  continueButtonDisabled: { backgroundColor: "#CCC" },
  continueButtonText: { color: "#fff", fontSize: 18, fontWeight: "600" },
  passwordInput: {
    borderWidth: 2,
    borderColor: "#007AFF",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingRight: 60,
    fontSize: 16,
    backgroundColor: "#F8F9FA",
  },
  eyeButton: { position: "absolute", right: 20, top: 16, width: 24, height: 24, alignItems: "center", justifyContent: "center" },
  eyeIcon: { position: "relative", width: 20, height: 14 },
  eyeOuter: { width: 20, height: 14, borderWidth: 2, borderColor: "#007AFF", borderRadius: 10 },
  eyeInner: { position: "absolute", top: 3, left: 6, width: 8, height: 8, backgroundColor: "#007AFF", borderRadius: 4 },
  eyeSlash: { position: "absolute", top: 6, left: -2, width: 24, height: 2, backgroundColor: "#007AFF", transform: [{ rotate: "45deg" }] },
  forgotPasswordContainer: { alignItems: "flex-start", marginBottom: 40 },
  forgotPasswordText: { fontSize: 16, color: "#007AFF", fontWeight: "600" },
});

export default SignUpAuth;
