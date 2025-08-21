import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import { useRouter } from "expo-router";

const SigUpCard = () => {
  const router = useRouter();

  const handleEmail = () => {
    router.push("/auth/Email");
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>SigUp</Text>
        <Text style={styles.subtitle}>
          Please select your preferred method{"\n"}
          to set up your account
        </Text>

        {/* Email Button */}
        <CustomButton
          title="Continue with Email"
          style={{ marginTop: 30 }}
          textStyle={{ paddingVertical: 8 }}
          onPress={handleEmail}
        />

        {/* Phone Button */}
        <CustomButton
          title="Continue with Phone"
          style={{ marginVertical: 20, backgroundColor: "#fff" }}
          textStyle={styles.buttonText}
        />

        {/* Social Login Buttons */}
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity
            style={styles.socialButton}
            //   onPress={handleGoogleLogin}
          >
            <View style={styles.googleIcon}>
              <Image
                source={require("../../assets/images/google.png")}
                alt="google"
                width={20}
                height={20}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialButton}
            //   onPress={handleFacebookLogin}
          >
            <View style={styles.facebookIcon}>
              <Text style={styles.facebookText}>f</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Terms and Conditions */}
        <Text style={styles.termsText}>
          If you are creating a new account,{"\n"}
          <Text style={styles.linkText}>Terms & Conditions</Text> and{" "}
          <Text style={styles.linkText}>Privacy Policy</Text> will apply.
        </Text>
      </View>
    </View>
  );
};

export default SigUpCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    paddingVertical: 8,
  },
  scrollContent: {
    flexGrow: 1,
  },
  person: {
    position: "absolute",
    alignItems: "center",
  },
  head: {
    alignItems: "center",
    marginBottom: 8,
  },
  hair: {
    width: 50,
    height: 40,
    backgroundColor: "#2C3E50",
    borderRadius: 25,
    marginBottom: -15,
  },
  face: {
    width: 35,
    height: 35,
    backgroundColor: "#FFDBAC",
    borderRadius: 17.5,
  },
  ear: {
    position: "absolute",
    right: -8,
    top: 25,
    width: 8,
    height: 12,
    backgroundColor: "#FFDBAC",
    borderRadius: 4,
  },
  body: {
    alignItems: "center",
  },
  redTop: {
    width: 70,
    height: 90,
    backgroundColor: "#E74C3C",
    borderRadius: 35,
    marginBottom: 5,
    position: "relative",
  },
  star: {
    position: "absolute",
    width: 8,
    height: 8,
    backgroundColor: "#FFFFFF",
    transform: [{ rotate: "45deg" }],
  },
  blackPants: {
    width: 60,
    height: 70,
    backgroundColor: "#2C3E50",
    borderRadius: 30,
  },
  leftArm: {
    position: "absolute",
    top: 60,
    left: -25,
    width: 25,
    height: 60,
    backgroundColor: "#E74C3C",
    borderRadius: 12.5,
    transform: [{ rotate: "-30deg" }],
  },
  rightArm: {
    position: "absolute",
    top: 60,
    right: -25,
    width: 25,
    height: 60,
    backgroundColor: "#E74C3C",
    borderRadius: 12.5,
    transform: [{ rotate: "30deg" }],
  },
  leftLeg: {
    position: "absolute",
    top: 140,
    left: -8,
    width: 20,
    height: 50,
    backgroundColor: "#2C3E50",
    borderRadius: 10,
  },
  rightLeg: {
    position: "absolute",
    top: 140,
    right: -8,
    width: 20,
    height: 50,
    backgroundColor: "#2C3E50",
    borderRadius: 10,
  },
  shoppingItems: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  leftBag: {
    position: "absolute",
    left: 50,
    top: 120,
  },
  rightBag: {
    position: "absolute",
    right: 50,
    top: 120,
  },
  bagHandle: {
    width: 30,
    height: 8,
    backgroundColor: "#8E44AD",
    borderRadius: 4,
    marginBottom: 2,
  },
  bagBody: {
    width: 35,
    height: 40,
    backgroundColor: "#3498DB",
    borderRadius: 8,
  },
  bread: {
    position: "absolute",
    top: -10,
    right: -5,
    width: 15,
    height: 25,
    backgroundColor: "#F39C12",
    borderRadius: 7.5,
  },
  vegetables: {
    position: "absolute",
    top: -8,
    left: 5,
    width: 12,
    height: 20,
    backgroundColor: "#27AE60",
    borderRadius: 6,
  },
  wineBottle: {
    position: "absolute",
    left: 80,
    bottom: 60,
  },
  bottleNeck: {
    width: 6,
    height: 15,
    backgroundColor: "#8B4513",
    borderRadius: 3,
    marginBottom: 2,
  },
  bottleBody: {
    width: 12,
    height: 30,
    backgroundColor: "#8B4513",
    borderRadius: 6,
  },
  milkCarton: {
    position: "absolute",
    right: 80,
    bottom: 60,
    width: 15,
    height: 25,
    backgroundColor: "#ECF0F1",
    borderRadius: 4,
  },
  phoneDevice: {
    position: "absolute",
    bottom: 20,
    alignItems: "center",
  },
  phoneScreen: {
    width: 120,
    height: 8,
    backgroundColor: "#BDC3C7",
    borderRadius: 4,
    marginBottom: 4,
  },
  phoneButton: {
    width: 20,
    height: 4,
    backgroundColor: "#95A5A6",
    borderRadius: 2,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: "hsla(0, 0%, 93%, 0.9)",
    width: "90%",
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2C3E50",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#7F8C8D",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 10,
  },
  emailButton: {
    backgroundColor: "#27AE60",
    paddingVertical: 16,
    borderRadius: 25,
    marginBottom: 16,
    alignItems: "center",
  },
  emailButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  phoneButtonText: {
    color: "#2C3E50",
    fontSize: 16,
    fontWeight: "600",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
    gap: 16,
  },
  socialButton: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#BDC3C7",
    alignItems: "center",
    justifyContent: "center",
  },
  googleIcon: {
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
  },
  googleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4285F4",
  },
  facebookIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#1877F2",
    alignItems: "center",
    justifyContent: "center",
  },
  facebookText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  termsText: {
    fontSize: 12,
    color: "#7F8C8D",
    textAlign: "center",
    lineHeight: 18,
  },
  linkText: {
    color: "#3498DB",
    textDecorationLine: "underline",
  },
});
