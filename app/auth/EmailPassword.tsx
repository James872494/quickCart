// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   KeyboardAvoidingView,
//   Platform,
//   StatusBar,
// } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";
// import { useRouter } from "expo-router";

// const PasswordInputScreen = () => {
//   const [password, setPassword] = useState("");
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

//   const router = useRouter();

//   const handleBack = () => {
//     router.back();
//     console.log("Back button pressed");
//   };

//   const handleContinue = () => {
//     router.push("/auth/Success");
//     console.log("Continue pressed with password:", password);
//   };

//   const handleForgotPassword = () => {
//     console.log("Forgot password pressed");
//   };

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };

//   const isPasswordValid = password.length >= 6;

//   return (
//     <SafeAreaView style={styles.container}>
//       <KeyboardAvoidingView
//         style={styles.keyboardAvoidingView}
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//       >
//         {/* Header */}
//         <View style={styles.header}>
//           <TouchableOpacity style={styles.backButton} onPress={handleBack}>
//             <MaterialIcons
//               name="arrow-back"
//               size={40}
//               color="#000"
//               style={styles.backIcon}
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Content */}
//         <View style={styles.content}>
//           {/* Lock Icon */}
//           <MaterialIcons name="lock" size={48} color="hsla(0, 0%, 84%, 1)" />

//           {/* Title */}
//           <Text style={styles.title}>Your password</Text>

//           {/* Password Input */}
//           <View style={styles.inputContainer}>
//             <TextInput
//               style={styles.passwordInput}
//               value={password}
//               onChangeText={setPassword}
//               secureTextEntry={!isPasswordVisible}
//               placeholder="Enter password"
//               keyboardType="number-pad"
//               maxLength={6} // Optional: limit to 6 digits
//             />
//             <TouchableOpacity
//               style={styles.eyeButton}
//               onPress={togglePasswordVisibility}
//             >
//               <View style={styles.eyeIcon}>
//                 <View style={styles.eyeOuter} />
//                 <View style={styles.eyeInner} />
//                 {!isPasswordVisible && <View style={styles.eyeSlash} />}
//               </View>
//             </TouchableOpacity>
//           </View>

//           {/* Forgot Password Link */}
//           <View style={styles.forgotPasswordContainer}>
//             <TouchableOpacity onPress={handleForgotPassword}>
//               <Text style={styles.forgotPasswordText}>Forgot password?.</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Continue Button */}
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             style={[
//               styles.continueButton,
//               !isPasswordValid && styles.continueButtonDisabled,
//             ]}
//             onPress={handleContinue}
//             disabled={!isPasswordValid}
//           >
//             <Text style={styles.continueButtonText}>Continue</Text>
//           </TouchableOpacity>
//         </View>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
//   keyboardAvoidingView: {
//     flex: 1,
//   },
//   header: {
//     paddingHorizontal: 20,
//     paddingTop: 10,
//     paddingBottom: 20,
//   },
//   backButton: {
//     width: 40,
//     height: 40,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   backIcon: {
//     fontSize: 24,
//     color: "#333",
//   },
//   content: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },
//   iconContainer: {
//     alignItems: "center",
//     marginBottom: 30,
//   },
//   lockIcon: {
//     position: "relative",
//     width: 40,
//     height: 50,
//   },
//   lockBody: {
//     position: "absolute",
//     bottom: 0,
//     width: 40,
//     height: 30,
//     backgroundColor: "#CCCCCC",
//     borderRadius: 8,
//   },
//   lockShackle: {
//     position: "absolute",
//     top: 0,
//     left: 8,
//     width: 24,
//     height: 24,
//     borderWidth: 4,
//     borderColor: "#CCCCCC",
//     borderRadius: 12,
//     borderBottomWidth: 0,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#333333",
//     marginBottom: 30,
//   },
//   inputContainer: {
//     position: "relative",
//     marginBottom: 20,
//   },
//   passwordInput: {
//     borderWidth: 2,
//     borderColor: "#007AFF",
//     borderRadius: 25,
//     paddingHorizontal: 20,
//     paddingVertical: 16,
//     paddingRight: 60,
//     fontSize: 16,
//     backgroundColor: "#F8F9FA",
//   },
//   eyeButton: {
//     position: "absolute",
//     right: 20,
//     top: 16,
//     width: 24,
//     height: 24,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   eyeIcon: {
//     position: "relative",
//     width: 20,
//     height: 14,
//   },
//   eyeOuter: {
//     width: 20,
//     height: 14,
//     borderWidth: 2,
//     borderColor: "#007AFF",
//     borderRadius: 10,
//   },
//   eyeInner: {
//     position: "absolute",
//     top: 3,
//     left: 6,
//     width: 8,
//     height: 8,
//     backgroundColor: "#007AFF",
//     borderRadius: 4,
//   },
//   eyeSlash: {
//     position: "absolute",
//     top: 6,
//     left: -2,
//     width: 24,
//     height: 2,
//     backgroundColor: "#007AFF",
//     transform: [{ rotate: "45deg" }],
//   },
//   forgotPasswordContainer: {
//     alignItems: "flex-start",
//     marginBottom: 40,
//   },
//   forgotPasswordText: {
//     fontSize: 16,
//     color: "#007AFF",
//     fontWeight: "600",
//   },
//   buttonContainer: {
//     paddingHorizontal: 20,
//     marginBottom: 20,
//   },
//   continueButton: {
//     backgroundColor: "#00C851",
//     paddingVertical: 16,
//     borderRadius: 25,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   continueButtonDisabled: {
//     backgroundColor: "#CCCCCC",
//   },
//   continueButtonText: {
//     color: "#FFFFFF",
//     fontSize: 18,
//     fontWeight: "600",
//   },
// });

// export default PasswordInputScreen;



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
import { useRouter, useLocalSearchParams } from "expo-router";
import { supabase } from "../../Supabase/supabaseClient";

const PasswordInputScreen = () => {
  const { email } = useLocalSearchParams<{ email: string }>();
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const router = useRouter();

  const handleBack = () => router.back();

  const handleContinue = async () => {
    if (!email || !password) return;

    // Supabase login
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data.session) {
      Alert.alert("Error", "Email or password incorrect");
      return;
    }

    router.push("/auth/Success");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <MaterialIcons name="arrow-back" size={40} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <MaterialIcons name="lock" size={48} color="hsla(0, 0%, 84%, 1)" />
          <Text style={styles.title}>Your password</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              <MaterialIcons
                name={isPasswordVisible ? "visibility" : "visibility-off"}
                size={24}
                color="#007AFF"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.continueButton,
              password.length < 6 && styles.continueButtonDisabled,
            ]}
            disabled={password.length < 6}
            onPress={handleContinue}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
  keyboardAvoidingView: { flex: 1 },
  header: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 20 },
  backButton: { width: 40, height: 40, alignItems: "center", justifyContent: "center" },
  content: { flex: 1, paddingHorizontal: 20, justifyContent: "center" },
  title: { fontSize: 28, fontWeight: "bold", color: "#333", marginVertical: 20 },
  inputContainer: { position: "relative", marginBottom: 20 },
  passwordInput: {
    borderWidth: 2,
    borderColor: "#007AFF",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 16,
    backgroundColor: "#F8F9FA",
  },
  eyeButton: { position: "absolute", right: 20, top: 16 },
  buttonContainer: { paddingHorizontal: 20, marginBottom: 20 },
  continueButton: {
    backgroundColor: "#00C851",
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: "center",
  },
  continueButtonDisabled: { backgroundColor: "#CCC" },
  continueButtonText: { color: "#fff", fontSize: 18, fontWeight: "600" },
});

export default PasswordInputScreen;
