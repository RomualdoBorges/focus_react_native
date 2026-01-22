import { Pressable, StyleSheet, Text } from "react-native";

interface ActionButtonProps {
  active: boolean;
  onPress: () => void;
  display: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  active,
  onPress,
  display,
}) => {
  return (
    <Pressable
      style={active ? styles.contextButtonActive : null}
      onPress={onPress}
    >
      <Text style={styles.contextButtonText}>{display}</Text>
    </Pressable>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  contextButtonActive: {
    backgroundColor: "#144480",
    borderRadius: 8,
  },
  contextButtonText: {
    fontSize: 12.5,
    color: "#FFFFFF",
    padding: 8,
  },
});
