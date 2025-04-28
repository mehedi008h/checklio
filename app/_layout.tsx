import "../global.css";
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Text, TouchableOpacity, View } from "react-native";
import { BlurView } from "expo-blur";
import Ionicons from "@expo/vector-icons/Ionicons";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const router = useRouter();
    const [loaded] = useFonts({
        Okra_300Light: require("../assets/fonts/Okra-MediumLight.ttf"),
        Okra_400Regular: require("../assets/fonts/Okra-Regular.ttf"),
        Okra_500Medium: require("../assets/fonts/Okra-Medium.ttf"),
        Okra_700SemiBold: require("../assets/fonts/Okra-Bold.ttf"),
        Okra_900Black: require("../assets/fonts/Okra-ExtraBold.ttf"),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <GestureHandlerRootView className="flex-1">
            <ThemeProvider
                value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            >
                <Stack>
                    <Stack.Screen
                        name="index"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="(tabs)"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="taskDetails"
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="addTask"
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen name="+not-found" />
                </Stack>
                <StatusBar style="auto" />
            </ThemeProvider>
        </GestureHandlerRootView>
    );
}
