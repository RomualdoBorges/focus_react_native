import { ReactNode } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface FokusButtonProps {
  title: string;
  onPress: () => void;
  icon?: ReactNode;
}

const FokusButton: React.FC<FokusButtonProps> = ({ title, onPress, icon }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {icon}
      <Text style={styles.buttonText}>{title}</Text>
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
  buttonText: {
    textAlign: "center",
    color: "#021123",
    fontSize: 18,
  },
});
