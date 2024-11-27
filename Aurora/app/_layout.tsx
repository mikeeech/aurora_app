import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
  // Slot = renders current child route (e.g. children in React)
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
