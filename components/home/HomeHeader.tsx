import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import Stack from "../common/Stack";

const HomeHeader = () => {
    return (
        <LinearGradient
            // Button Linear Gradient
            colors={["#404040", "#293E33"]}
            start={[0, 0]}
            end={[0, 1]}
            className="w-full min-h-fit pt-10 px-4"
        >
            <View className="flex flex-row justify-between items-center">
                <View>
                    <Text className="text-lg font-okra_500 text-neutral-300">
                        Good Morning
                    </Text>
                    <Text className="text-2xl font-okra_500 text-neutral-100">
                        Mehedi Hasan
                    </Text>
                </View>
                <TouchableOpacity>
                    <BlurView
                        intensity={20}
                        className="w-12 h-12 rounded-full justify-center items-center overflow-hidden "
                    >
                        <View className="relative">
                            <Ionicons
                                name="notifications-outline"
                                size={24}
                                color="white"
                            />
                            <View className="absolute h-2 w-2 bg-red-500 rounded-full top-1 right-1" />
                        </View>
                    </BlurView>
                </TouchableOpacity>
            </View>

            <View className="flex-row items-center justify-between px-8 mt-8">
                <Stack day="Mon" value={30} />
                <Stack day="Tue" value={20} />
                <Stack day="Wed" value={60} />
                <Stack day="Thr" value={80} />
                <Stack day="Fri" value={40} />
                <Stack day="Sat" value={90} />
                <Stack day="Sun" value={100} />
            </View>

            <BlurView
                tint="light"
                intensity={10}
                className="p-4 rounded-lg overflow-hidden mb-4"
            >
                <View className="flex-row items-center gap-3">
                    <MaterialCommunityIcons
                        name="reminder"
                        size={24}
                        color="#d4d4d4"
                    />
                    <View>
                        <Text className="text-xl font-okra_500 font-medium text-neutral-100 capitalize">
                            7 tasks to complete today
                        </Text>
                        <Text className="text-sm font-okra_300 text-neutral-300 mt-1">
                            Your productivity for the day is shown here
                        </Text>
                    </View>
                </View>
                <View className="flex-row justify-between items-center mt-2">
                    <Text className="text-neutral-300 font-okra_300 text-sm">
                        Complete
                    </Text>
                    <Text className="text-neutral-300 font-okra_300 text-sm">
                        2/7
                    </Text>
                </View>
                <View className="h-1 w-full bg-neutral-400 rounded-full mt-2">
                    <View className="h-1 w-[40%] bg-teal-600 rounded-full"></View>
                </View>
            </BlurView>
        </LinearGradient>
    );
};

export default HomeHeader;
