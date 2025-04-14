import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
                headerShown: false,
                tabBarStyle: Platform.select({
                    ios: {
                        // Use a transparent background on iOS to show the blur effect
                        position: "absolute",
                    },
                    default: {},
                }),
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" size={24} color="black" />
                    ),
                }}
            />
            <Tabs.Screen
                name="addTask"
                options={{
                    title: "",
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="pluscircleo" size={24} color="black" />
                    ),
                }}
            />
            <Tabs.Screen
                name="tasks"
                options={{
                    title: "Tasks",
                    tabBarIcon: ({ color }) => (
                        <Entypo name="list" size={24} color="black" />
                    ),
                }}
            />
        </Tabs>
    );
}
