import { Tabs } from "expo-router";
import React from "react";
import { Platform, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarHideOnKeyboard: true,
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
                    headerShown: true,
                    headerTransparent: true,
                    headerTitle: "",
                    headerStyle: {
                        backgroundColor: "transparent",
                    },
                    headerLeft: () => (
                        <View className="pl-4">
                            <Text className="text-neutral-300 font-okra_700 text-xl font-bold">
                                Add Your Task
                            </Text>
                            <Text className="text-base font-okra_300 text-neutral-400">
                                Let's make your day more productive 😊
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="tasks"
                options={{
                    tabBarLabel: "Tasks",
                    tabBarIcon: ({ color }) => (
                        <Entypo name="list" size={24} color="black" />
                    ),
                    headerShown: true,
                    headerTransparent: true,
                    headerTitle: "",
                    headerStyle: {
                        backgroundColor: "transparent",
                    },
                    headerLeft: () => (
                        <View className="pl-4">
                            <Text className="text-neutral-300 font-okra_700 text-xl font-bold">
                                My Tasks
                            </Text>
                            <Text className="text-base font-okra_300 text-neutral-400">
                                {new Date().toString().slice(0, 15)}
                            </Text>
                        </View>
                    ),
                    headerRight: () => (
                        <View className="pr-4">
                            <Entypo
                                name="dots-three-vertical"
                                size={20}
                                color="#d4d4d4"
                            />
                        </View>
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome6
                            name="circle-user"
                            size={24}
                            color="black"
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
