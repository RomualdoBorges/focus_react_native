import { TaskProvider } from "@/components/context/TaskProvider";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <TaskProvider>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: "#021223",
          },
          headerTintColor: "#FFFFFF",
          drawerStyle: {
            backgroundColor: "#021123",
          },
          drawerLabelStyle: {
            color: "#FFFFFF",
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{ headerShown: false, drawerItemStyle: { display: "none" } }}
        />
        <Drawer.Screen
          name="add-task/index"
          options={{
            drawerItemStyle: { display: "none" },
            title: "",
            headerLeft: () => {
              return (
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color="#FFFFFF"
                  style={{ marginLeft: 16 }}
                  onPress={() => router.navigate("/tasks")}
                />
              );
            },
          }}
        />
        <Drawer.Screen
          name="pomodoro"
          options={{ drawerLabel: "Timer", title: "" }}
        />
        <Drawer.Screen
          name="tasks/index"
          options={{ drawerLabel: "Lista de tarefas", title: "" }}
        />
      </Drawer>
    </TaskProvider>
  );
}
