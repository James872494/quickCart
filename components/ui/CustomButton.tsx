import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

type ButtonProps = {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
};

const CustomButton = ({
  title,
  onPress,
  style,
  textStyle,
  disabled,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress} // It's fine if undefined; TouchableOpacity handles it gracefully
      style={[styles.button, style, disabled && styles.disabledButton]}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text
        style={[
          styles.buttonText,
          textStyle,
          disabled && styles.disabledButtonText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "hsla(142, 71%, 50%, 1)",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor:"hsla(0, 0%, 0%, 0.09)"
  },
  disabledButtonText: {
    color: "#000",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
