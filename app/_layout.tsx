import "../global.css";
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useColorScheme } from "@/hooks/useColorScheme";
import ModalProvider from "@/components/common/ModalProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Set the animation options (optional)

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
            <SafeAreaProvider>
                <ThemeProvider
                    value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
                >
                    <ModalProvider>
                        <Stack
                            screenOptions={{
                                animation: "fade_from_bottom",
                                animationDuration: 400,
                            }}
                        >
                            <Stack.Screen
                                name="index"
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="userDetails"
                                options={{
                                    headerShown: false,
                                }}
                            />
                            <Stack.Screen
                                name="counter"
                                options={{
                                    headerShown: false,
                                }}
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
                            <Stack.Screen
                                name="updateTask"
                                options={{
                                    headerShown: false,
                                }}
                            />
                            <Stack.Screen name="+not-found" />
                        </Stack>
                    </ModalProvider>
                </ThemeProvider>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}
