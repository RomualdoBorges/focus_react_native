import ActionButton from "@/components/ActionButton";
import { IconPause, IconPlay } from "@/components/Icons";
import Timer from "@/components/Timer";
import { useRef, useState } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FokusButton from "../components/FokusButton";

type PomodoroType = {
  id: string;
  initialValue: number;
  image: ImageSourcePropType;
  display: string;
};

const pomodoro: PomodoroType[] = [
  {
    id: "focus",
    initialValue: 25 * 60,
    image: require("../assets/images/pomodoro.png"),
    display: "Foco",
  },
  {
    id: "short",
    initialValue: 5 * 60,
    image: require("../assets/images/short.png"),
    display: "Pausa curta",
  },
  {
    id: "long",
    initialValue: 15 * 60,
    image: require("../assets/images/long.png"),
    display: "Pausa longa",
  },
];

export default function Pomodoro() {
  const [timerType, setTimerType] = useState<PomodoroType>(pomodoro[0]);
  const [seconds, setSeconds] = useState<number>(pomodoro[0].initialValue);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  const timerRef = useRef<number | null>(null);

  const clear = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
    }
  };

  const toggleTimerType = (newTimerType: PomodoroType) => {
    setTimerType(newTimerType);
    setSeconds(newTimerType.initialValue);
    clear();
  };

  const toggleTimer = () => {
    if (timerRef.current) {
      clear();
      return;
    }

    setTimerRunning(true);

    const id = setInterval(() => {
      setSeconds((oldState) => {
        if (oldState === 0) {
          clear();
          return timerType.initialValue;
        }

        return oldState - 1;
      });
    }, 1000);
    timerRef.current = id;
  };

  return (
    <View style={styles.container}>
      <Image source={timerType.image} style={styles.image} />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map((p) => (
            <ActionButton
              key={p.id}
              active={timerType.id === p.id}
              onPress={() => toggleTimerType(p)}
              display={p.display}
            />
          ))}
        </View>
        <Timer totalSeconds={seconds} />
        <FokusButton
          title={timerRunning ? "Pausar" : "Começar"}
          icon={timerRunning ? <IconPause /> : <IconPlay />}
          onPress={toggleTimer}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins lucrativos.
        </Text>
        <Text style={styles.footerText}>Desenvolvido por Alura.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021223",
    gap: 40,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  text: {
    color: "#FFFFFF",
  },
  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32,
  },
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  footer: {
    width: "80%",
  },
  footerText: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 12.5,
  },
});
