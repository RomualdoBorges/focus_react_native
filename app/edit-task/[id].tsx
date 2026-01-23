import useTaskContext from "@/components/context/useTaskContext";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function EditTask() {
  const { id } = useLocalSearchParams();
  const taskId = Number(id);
  const { tasks, updateTask } = useTaskContext();

  const task = tasks.find((t) => t.id === taskId);
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    if (task) {
      setDescription(task.description);
    }
  }, [task]);

  const handleSave = () => {
    if (!description) return;
    updateTask(taskId, description);
    router.navigate("/tasks");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar tarefa:</Text>
      <TextInput
        style={styles.input}
        multiline
        onChangeText={setDescription}
        value={description}
      />
      <Pressable style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    padding: 24,
    gap: 16,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    minHeight: 100,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
