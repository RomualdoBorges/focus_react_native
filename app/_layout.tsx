import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
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
        name="pomodoro"
        options={{ drawerLabel: "Timer", title: "" }}
      />
      <Drawer.Screen
        name="tasks/index"
        options={{ drawerLabel: "Lista de tarefas", title: "" }}
      />
      <Drawer.Screen
        name="add-task/index"
        options={{ drawerItemStyle: { display: "none" } }}
      />
    </Drawer>
  );
}
