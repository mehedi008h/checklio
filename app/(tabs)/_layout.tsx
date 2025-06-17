import { Tabs, useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useColorScheme } from "@/hooks/useColorScheme";
import { BlurView } from "expo-blur";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const router = useRouter();

    const handlePress = () => {
        router.push("/addTask");
    };

    return (
        <Tabs
            screenOptions={{
                animation: "fade",
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: "blue",
                headerShown: false,

                tabBarStyle: {
                    elevation: 0,
                    display: "flex",
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarLabel: ({ focused }) => {
                        return (
                            <Text
                                className={`${
                                    focused
                                        ? "text-teal-800"
                                        : "text-neutral-600"
                                } font-okra_400 text-sm font-normal`}
                            >
                                Home
                            </Text>
                        );
                    },
                    headerShown: true,
                    headerTransparent: true,
                    headerTitle: "",
                    headerStyle: {
                        backgroundColor: "transparent",
                    },
                    tabBarIcon: ({ focused }) => (
                        <AntDesign
                            name="home"
                            size={24}
                            color={focused ? "#115e59" : "#525252"}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="tasks"
                options={{
                    tabBarLabel: ({ focused }) => {
                        return (
                            <Text
                                className={`${
                                    focused
                                        ? "text-teal-800"
                                        : "text-neutral-600"
                                } font-okra_400 text-sm font-normal`}
                            >
                                Tasks
                            </Text>
                        );
                    },
                    tabBarIcon: ({ focused }) => (
                        <Entypo
                            name="list"
                            size={20}
                            color={focused ? "#115e59" : "#525252"}
                        />
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
                        <TouchableOpacity
                            onPress={handlePress}
                            className="pr-4"
                        >
                            <BlurView
                                intensity={20}
                                className="w-12 h-12 rounded-full justify-center items-center overflow-hidden "
                            >
                                <AntDesign
                                    name="pluscircleo"
                                    size={24}
                                    color="#fff"
                                />
                            </BlurView>
                        </TouchableOpacity>
                    ),
                }}
            />

            <Tabs.Screen
                name="timeCounter"
                options={{
                    tabBarLabel: ({ focused }) => {
                        return (
                            <Text
                                className={`${
                                    focused
                                        ? "text-teal-800"
                                        : "text-neutral-600"
                                } font-okra_400 text-sm font-normal`}
                            >
                                Counter
                            </Text>
                        );
                    },
                    headerShown: true,
                    headerTransparent: true,
                    headerTitle: "",
                    headerStyle: {
                        backgroundColor: "transparent",
                    },
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="stopwatch-outline"
                            size={24}
                            color={focused ? "#115e59" : "#525252"}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="notes"
                options={{
                    tabBarLabel: ({ focused }) => {
                        return (
                            <Text
                                className={`${
                                    focused
                                        ? "text-teal-800"
                                        : "text-neutral-600"
                                } font-okra_400 text-sm font-normal`}
                            >
                                Note
                            </Text>
                        );
                    },

                    tabBarIcon: ({ focused }) => (
                        <FontAwesome
                            name="sticky-note-o"
                            size={20}
                            color={focused ? "#115e59" : "#525252"}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}

// #2f82bd
// #43a1d4
