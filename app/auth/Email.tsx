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

// const EmailInputScreen = () => {
//   const [email, setEmail] = useState("");
//   const [isNewsletterChecked, setIsNewsletterChecked] = useState(false);

//   const router = useRouter();

//   const handleBack = () => {
//     router.back();
//   };

//   const handleContinue = () => {
//     router.push("/auth/EmailPassword");
//     console.log("Continue pressed with email:", email);
//     // console.log("Newsletter subscription:", isNewsletterChecked);
//   };

//   const toggleNewsletter = () => {
//     setIsNewsletterChecked(!isNewsletterChecked);
//   };

//   return (
//     <View style={styles.Androidcontainer}>
//       <SafeAreaView style={styles.container}>
//         <KeyboardAvoidingView
//           style={styles.keyboardAvoidingView}
//           behavior={Platform.OS === "ios" ? "padding" : "height"}
//         >
//           {/* Header */}
//           <View style={styles.header}>
//             <TouchableOpacity style={styles.backButton} onPress={handleBack}>
//               <MaterialIcons
//                 name="arrow-back"
//                 size={40}
//                 color="#000"
//                 style={styles.backIcon}
//               />
//             </TouchableOpacity>
//           </View>

//           {/* Content */}
//           <View style={styles.content}>
//             {/* Avatar Icon */}

//             {/* Title and Description */}
//             <View style={styles.textContainer}>
//               <MaterialIcons
//                 name="alternate-email"
//                 size={40}
//                 color="hsla(0, 0%, 84%, 1)"
//               />
//               <Text style={styles.title}>Get going with email</Text>
//               <Text style={styles.description}>
//                 It&#39;s helpful to provide a good reason for why the email
//                 address is required.
//               </Text>
//             </View>

//             {/* Email Input */}
//             <View style={styles.inputContainer}>
//               <TextInput
//                 style={styles.emailInput}
//                 placeholder="Email address"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//                 autoCorrect={false}
//                 autoFocus={true}
//               />
//             </View>

//             {/* Newsletter Checkbox */}
//             <TouchableOpacity
//               style={styles.checkboxContainer}
//               onPress={toggleNewsletter}
//             >
//               <View
//                 style={[
//                   styles.checkbox,
//                   isNewsletterChecked && styles.checkboxChecked,
//                 ]}
//               >
//                 {isNewsletterChecked && (
//                   <Text style={styles.checkmarkIcon}>✓</Text>
//                 )}
//               </View>
//               <Text style={styles.checkboxText}>
//                 Stay up to date with the latest news and resources delivered
//                 directly to your inbox
//               </Text>
//             </TouchableOpacity>
//           </View>

//           {/* Continue Button */}
//           <View style={styles.buttonContainer}>
//             <TouchableOpacity
//               style={[
//                 styles.continueButton,
//                 !email && styles.continueButtonDisabled,
//               ]}
//               onPress={handleContinue}
//               disabled={!email}
//             >
//               <Text style={styles.continueButtonText}>Continue</Text>
//             </TouchableOpacity>
//           </View>
//         </KeyboardAvoidingView>
//       </SafeAreaView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//   },
//   Androidcontainer: {
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
//   content: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },
//   avatarContainer: {
//     alignItems: "center",
//     marginBottom: 30,
//   },
//   avatar: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: "#F5F5F5",
//     alignItems: "center",
//     justifyContent: "center",
//     borderWidth: 2,
//     borderColor: "#E0E0E0",
//   },
//   textContainer: {
//     marginBottom: 40,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#333333",
//     marginBottom: 12,
//   },
//   description: {
//     fontSize: 16,
//     color: "#666666",
//     lineHeight: 24,
//   },
//   inputContainer: {
//     marginBottom: 30,
//   },
//   emailInput: {
//     borderWidth: 2,
//     borderColor: "#007AFF",
//     borderRadius: 25,
//     paddingHorizontal: 20,
//     paddingVertical: 16,
//     fontSize: 16,
//     backgroundColor: "#FFFFFF",
//   },
//   checkboxContainer: {
//     flexDirection: "row",
//     alignItems: "flex-start",
//     marginBottom: 40,
//   },
//   checkbox: {
//     width: 20,
//     height: 20,
//     borderWidth: 2,
//     borderColor: "#CCCCCC",
//     borderRadius: 4,
//     marginRight: 12,
//     marginTop: 2,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#FFFFFF",
//   },
//   checkboxChecked: {
//     backgroundColor: "#007AFF",
//     borderColor: "#007AFF",
//   },
//   checkboxText: {
//     flex: 1,
//     fontSize: 14,
//     color: "#666666",
//     lineHeight: 20,
//   },
//   buttonContainer: {
//     paddingHorizontal: 20,
//     paddingBottom: 20,
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
//   backIcon: {
//     fontSize: 24,
//     color: "#333",
//   },
//   personIcon: {
//     fontSize: 32,
//     color: "#CCCCCC",
//   },
//   checkmarkIcon: {
//     fontSize: 14,
//     color: "#FFFFFF",
//     fontWeight: "bold",
//   },
// });

// export default EmailInputScreen;



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

const EmailInputScreen = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleContinue = async () => {
    if (!email) return;
    setLoading(true);

    try {
      // Attempt to sign in with dummy password to check if email exists
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password: "invalid_password",
      });

      if (error && error.message === "Invalid login credentials") {
        // Email exists, proceed to password screen
        router.push({
          pathname: "/auth/EmailPassword",
          params: { email },
        });
      } else if (error && error.message.includes("User not found")) {
        Alert.alert("Error", "Email not found. Please sign up first.");
      }
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.Androidcontainer}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
              <MaterialIcons name="arrow-back" size={40} color="#000" />
            </TouchableOpacity>
          </View>

          {/* Content */}
          <View style={styles.content}>
            <View style={styles.textContainer}>
              <MaterialIcons name="alternate-email" size={40} color="#AAA" />
              <Text style={styles.title}>Enter your email</Text>
              <Text style={styles.description}>
                We need your email to log in or continue.
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
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.continueButton,
                !email ? styles.continueButtonDisabled : null,
              ]}
              disabled={!email || loading}
              onPress={handleContinue}
            >
              <Text style={styles.continueButtonText}>
                {loading ? "Checking..." : "Continue"}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
  Androidcontainer: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  keyboardAvoidingView: { flex: 1 },
  header: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 20 },
  backButton: { width: 40, height: 40, alignItems: "center", justifyContent: "center" },
  content: { flex: 1, paddingHorizontal: 20 },
  textContainer: { marginBottom: 40 },
  title: { fontSize: 28, fontWeight: "bold", color: "#333", marginBottom: 12 },
  description: { fontSize: 16, color: "#666", lineHeight: 24 },
  inputContainer: { marginBottom: 30 },
  emailInput: {
    borderWidth: 2,
    borderColor: "#007AFF",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 16,
    backgroundColor: "#FFF",
  },
  buttonContainer: { paddingHorizontal: 20, paddingBottom: 20 },
  continueButton: {
    backgroundColor: "#00C851",
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: "center",
  },
  continueButtonDisabled: { backgroundColor: "#CCC" },
  continueButtonText: { color: "#FFF", fontSize: 18, fontWeight: "600" },
});

export default EmailInputScreen;
