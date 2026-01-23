import FokusButton from "@/components/FokusButton";
import { IconPlus } from "@/components/Icons";
import TaskItem from "@/components/TaskItem";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Tasks() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Listas de tarefas:</Text>
        <View style={styles.inner}>
          <TaskItem completed={true} text="Estudar React" />
          <TaskItem completed={false} text="Estudar React Native" />
        </View>

        <FokusButton
          outline={true}
          title="Adicionar nova tarefa"
          icon={<IconPlus />}
          onPress={() => router.navigate("/add-task")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021223",
    alignItems: "center",
  },
  wrapper: {
    gap: 40,
    width: "90%",
  },
  text: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 26,
  },
  inner: {
    gap: 8,
  },
});
