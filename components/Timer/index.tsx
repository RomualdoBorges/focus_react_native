import { StyleSheet, Text } from "react-native";

interface TimerProps {
  totalSeconds: number;
}

const Timer: React.FC<TimerProps> = ({ totalSeconds }) => {
  const date = new Date(totalSeconds * 1000);
  const options: Intl.DateTimeFormatOptions = {
    minute: "2-digit",
    second: "2-digit",
  };

  return (
    <Text style={styles.timer}>
      {date.toLocaleTimeString("pt-BR", options)}
    </Text>
  );
};

export default Timer;

const styles = StyleSheet.create({
  timer: {
    fontSize: 54,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});
