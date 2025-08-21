import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import CustomButton from "../../components/ui/CustomButton";
import { useRouter } from "expo-router";

const Welcome3 = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/auth/LogIn");
  };

  const handleSignUp = () => {
    router.push("/auth/SignupDetails");
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.textContent}>
          <Text style={styles.heading}>Welcome to QuickCart</Text>
          <Text style={styles.paragraph}>
            Here’s a good place to showcase the app’s key features.
          </Text>
        </View>
      </View>
      <Image
        source={require("../../assets/images/Female order picker picking up groceries.png")}
        accessibilityLabel="Female order picker picking up groceries"
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Log in"
          style={styles.button1}
          textStyle={styles.button1Text}
          onPress={handleLogin}
        />
        <CustomButton
          title="Sign up"
          style={styles.button}
          onPress={handleSignUp}
        />
      </View>
    </View>
  );
};

export default Welcome3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    position: "relative",
    backgroundColor: "#fff",
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
  },
  textContent: {
    paddingVertical: 20,
    alignItems: "center",
    width: "70%",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 25,
    paddingVertical: 10,
  },
  paragraph: {
    fontSize: 15,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "60%",
    resizeMode: "cover",
  },
  buttonContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 50,
    width: "100%",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  button1: {
    width: "40%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "hsla(0, 0%, 0%, 0.09)",
  },
  button1Text: {
    color: "black",
  },
  button: {
    width: "40%",
  },
});
