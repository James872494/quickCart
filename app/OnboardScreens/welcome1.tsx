import React, { useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { useRouter } from "expo-router";

const Welcome1 = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/OnboardScreens/welcome2"); 
    }, 2000);

    return () => clearTimeout(timer); 
  }, [router]); 

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/QuickCartLogo.png")}
        style={styles.logo}
        accessibilityLabel="QuickCart Logo"
      />
    </View>
  );
};

export default Welcome1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 200,
    resizeMode: "contain",
  },
});
