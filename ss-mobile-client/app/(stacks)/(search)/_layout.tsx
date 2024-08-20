import { Stack } from "expo-router";
import "react-native-reanimated";

export default function SearchLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="report" options={{ headerShown: false }} />
    </Stack>
  );
}
