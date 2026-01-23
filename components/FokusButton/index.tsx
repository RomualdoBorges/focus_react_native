import { ReactNode } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface FokusButtonProps {
  title: string;
  onPress: () => void;
  icon?: ReactNode;
  outline?: boolean;
}

const FokusButton: React.FC<FokusButtonProps> = ({
  title,
  onPress,
  icon,
  outline,
}) => {
  return (
    <Pressable
      style={[styles.button, outline && styles.outlineButton]}
      onPress={onPress}
    >
      {icon}
      <Text style={[styles.buttonText, outline && styles.outlineButtonText]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default FokusButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#8872FF",
    borderRadius: 32,
    padding: 8,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderColor: "#8872FF",
    borderWidth: 2,
  },
  buttonText: {
    textAlign: "center",
    color: "#021123",
    fontSize: 18,
  },
  outlineButtonText: {
    color: "#8872FF",
  },
});
