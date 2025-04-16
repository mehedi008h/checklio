import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Calendar from "../common/Calendar";

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
                    <Text className="text-3xl font-okra_500 text-neutral-100">
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

            <BlurView
                intensity={10}
                tint="prominent"
                className="h-16 w-full my-5 rounded-md overflow-hidden flex-row  justify-between items-center px-2 gap-3"
            >
                <View className="flex-row items-center gap-3">
                    <MaterialCommunityIcons
                        name="reminder"
                        size={24}
                        color="#d4d4d4"
                    />
                    <View>
                        <Text className="text-lg font-okra_700 font-bold text-neutral-300">
                            Flight to Dhaka at 10:00 AM
                        </Text>
                        <Text className="text-base font-okra_300 text-neutral-400">
                            Lorem ipsum dolor sit amet ipsum dolor
                        </Text>
                    </View>
                </View>
                <MaterialIcons
                    name="arrow-forward-ios"
                    size={15}
                    color="#d4d4d4"
                />
            </BlurView>
            <BlurView
                intensity={10}
                className="h-24 w-full mb-5 rounded-md overflow-hidden p-3"
            >
                <Calendar />
            </BlurView>
        </LinearGradient>
    );
};

export default HomeHeader;
