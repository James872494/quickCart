import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, SafeAreaView, Animated } from "react-native";
import { useRouter } from "expo-router";

interface SuccessScreenProps {
  onComplete?: () => void;
  autoNavigate?: boolean;
  delay?: number;
  nextRoute?: string;
}

const SuccessScreen = ({
  onComplete,
  autoNavigate = true,
  delay = 2000,
  nextRoute = "/home", // ✅ default route after success
}: SuccessScreenProps) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const router = useRouter();

  useEffect(() => {
    // Animate the checkmark appearing
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    // Auto-navigate after delay if enabled
    if (autoNavigate) {
      const timer = setTimeout(() => {
        if (onComplete) {
          onComplete();
        } else {
          router.push("/MainScreens/Welcome");
        }
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [onComplete, autoNavigate, delay, router, scaleAnim, fadeAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Success Icon */}
        <Animated.View
          style={[styles.iconContainer, { transform: [{ scale: scaleAnim }] }]}
        >
          <View style={styles.checkmarkCircle}>
            <Text style={styles.checkmarkIcon}>✓</Text>
          </View>
        </Animated.View>

        {/* Done Text */}
        <Animated.View style={[styles.textContainer, { opacity: fadeAnim }]}>
          <Text style={styles.doneText}>Done</Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  iconContainer: {
    marginBottom: 30,
  },
  checkmarkCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#00C851",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#00C851",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  checkmarkIcon: {
    fontSize: 32,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  textContainer: {
    alignItems: "center",
  },
  doneText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333333",
    textAlign: "center",
  },
});

export default SuccessScreen;
