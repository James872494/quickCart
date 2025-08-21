import CustomButton from "../../components/ui/CustomButton";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";

const Welcome2 = () => {
  const router = useRouter();

  const handlePress = () => {
    router.push("/OnboardScreens/welcome3");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/Woman with shopping bags riding grocery cart.png")}
        accessibilityLabel="Woman with shopping bags riding grocery cart"
        width={100}
        height={100}
        style={styles.Image}
      />
      <View style={styles.text}>
        <View style={styles.innerText}>
          <Text style={styles.Heading}>Welcome to QuickCart</Text>
          <Text style={styles.paragraph}>
            Here’s a good place for a brief overview of the app or it’s key
            features.
          </Text>
        </View>
      </View>
      <CustomButton title="Get Started" style={styles.button} onPress={handlePress}/>
    </View>
  );
};

export default Welcome2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    position: "relative",
    alignItems: "center",
  },
  Image: {
    width: "100%",
    height: "40%",
    resizeMode: "contain",
  },
  text: {
    paddingTop: 100,
    width: "100%",
    alignItems: "center",
  },
  innerText: {
    width: "80%",
    alignItems: "center",
  },
  Heading: {
    fontWeight: "bold",
    fontSize: 25,
  },
  paragraph: {
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 15,
  },
  button: {
    width: "90%",
    position: "absolute",
    bottom: 50,
  },
});
