import React from "react";
import { StyleSheet, SafeAreaView, ImageBackground, View } from "react-native";
import SigUpCard from "@/components/ui/SignUpCard";


const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/girl with grocery bags and food.png")}
        resizeMode="contain"
        style={styles.background} // <-- add this
      >
        <View style={styles.card}>
          <SigUpCard />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    position: "relative",
    alignItems: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "80%",
  },
  card: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

export default SignUpScreen;
