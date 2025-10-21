import { Stack, useRouter } from "expo-router";
import "./global.css";

export default function RootLayout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false, title: "" }} />
      <Stack.Screen name="sitterProfile" options={{ headerShown: false, title: "" }} />
      <Stack.Screen name="checkout" options={{ headerShown: false, title: "" }} />
    </Stack>
  );
}
