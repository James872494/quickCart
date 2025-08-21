import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => (
  <View style={styles.featureItem}>
    <View style={styles.iconContainer}>{icon}</View>
    <View style={styles.featureContent}>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </View>
  </View>
);

const WelcomeToQuickCartScreen = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/(tabs)");
    console.log("Get started pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome to QuickCart</Text>
        </View>

        {/* Features */}
        <View style={styles.featuresContainer}>
          {/* In-app messaging */}
          <FeatureItem
            icon={<MaterialIcons name="message" size={40} color="#00C851" />}
            title="In-app messaging"
            description="Send real-time updates to keep us engaged and informed."
          />

          {/* Personalization */}
          <FeatureItem
            icon={
              <MaterialIcons name="manage-accounts" size={40} color="#00C851" />
            }
            title="Personalization"
            description="User interface that adapts to their specific needs and interests."
          />

          {/* Analytics and reporting */}
          <FeatureItem
            icon={<MaterialIcons name="bar-chart" size={40} color="#00C851" />}
            title="Analytics and reporting"
            description="Collect and analyse data to gain insights into audience behaviour."
          />
        </View>
      </ScrollView>

      {/* Get Started Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={handleGetStarted}
        >
          <Text style={styles.getStartedButtonText}>Get started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
  },
  featuresContainer: {
    flex: 1,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 40,
  },
  iconContainer: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  featureContent: {
    flex: 1,
    paddingTop: 8,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 16,
    color: "#666666",
    lineHeight: 24,
  },
  // Messaging Icon Styles
  messagingIcon: {
    position: "relative",
    width: 50,
    height: 40,
  },
  chatBubble: {
    width: 40,
    height: 30,
    backgroundColor: "#00C851",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  chatDots: {
    flexDirection: "row",
    gap: 4,
  },
  chatDot: {
    width: 4,
    height: 4,
    backgroundColor: "#FFFFFF",
    borderRadius: 2,
  },
  chatTail: {
    position: "absolute",
    bottom: 0,
    left: 8,
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#00C851",
  },
  // Personalization Icon Styles
  personalizationIcon: {
    position: "relative",
    width: 40,
    height: 50,
  },
  documentBase: {
    width: 40,
    height: 50,
    backgroundColor: "#00C851",
    borderRadius: 4,
  },
  documentCorner: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 12,
    borderBottomWidth: 12,
    borderLeftColor: "transparent",
    borderBottomColor: "#FFFFFF",
  },
  documentLines: {
    position: "absolute",
    top: 20,
    left: 8,
    right: 8,
  },
  documentLine: {
    height: 2,
    backgroundColor: "#FFFFFF",
    marginBottom: 4,
    borderRadius: 1,
  },
  // Analytics Icon Styles
  analyticsIcon: {
    width: 50,
    height: 40,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  chartBars: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 4,
  },
  chartBar: {
    width: 8,
    backgroundColor: "#00C851",
    borderRadius: 2,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  getStartedButton: {
    backgroundColor: "#00C851",
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  getStartedButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default WelcomeToQuickCartScreen;