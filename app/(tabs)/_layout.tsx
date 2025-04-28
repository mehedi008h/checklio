import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: "blue",
                headerShown: false,
                tabBarStyle: {
                    elevation: 0,
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
                name="addTask"
                options={{
                    title: "",
                    tabBarIcon: ({ focused }) => (
                        <AntDesign
                            name="pluscircleo"
                            size={24}
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
                    tabBarLabel: ({ focused }) => {
                        return (
                            <Text
                                className={`${
                                    focused
                                        ? "text-teal-800"
                                        : "text-neutral-600"
                                } font-okra_400 text-sm font-normal`}
                            >
                                Profile
                            </Text>
                        );
                    },

                    tabBarIcon: ({ focused }) => (
                        <FontAwesome6
                            name="circle-user"
                            size={20}
                            color={focused ? "#115e59" : "#525252"}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
