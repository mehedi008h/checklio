import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import AntDesign from "@expo/vector-icons/AntDesign";
import Animated, { LinearTransition } from "react-native-reanimated";

const NotesHeader = () => {
    const [selectedDay, setSelectedDay] = useState<string>("All");

    const handleSelected = (day: string) => {
        setSelectedDay(day);
    };
    return (
        <LinearGradient
            // Button Linear Gradient
            colors={["#404040", "#293E33"]}
            start={[0, 0]}
            end={[0, 1]}
            className="w-full  pt-10 pb-5 px-4"
        >
            <View className="flex-row justify-between items-center">
                <View>
                    <Text className="text-neutral-300 font-okra_700 text-xl font-bold">
                        My Notes
                    </Text>
                    <Text className="text-base font-okra_300 text-neutral-400">
                        {new Date().toString().slice(0, 15)}
                    </Text>
                </View>
                <TouchableOpacity className="pr-4">
                    <BlurView
                        intensity={20}
                        className="w-12 h-12 rounded-full justify-center items-center overflow-hidden "
                    >
                        <AntDesign name="pluscircleo" size={24} color="#fff" />
                    </BlurView>
                </TouchableOpacity>
            </View>

            <Animated.View
                layout={LinearTransition.duration(400)}
                className="bg-neutral-500/30 flex-row items-center gap-2 mt-6 p-2 rounded-md overflow-hidden justify-between"
            >
                <TouchableOpacity
                    onPress={() => handleSelected("All")}
                    className={`px-4 py-1 ${
                        selectedDay === "All"
                            ? "bg-neutral-200/10 rounded-md"
                            : ""
                    }`}
                >
                    <Text className="text-base font-okra_300 text-white">
                        All
                    </Text>
                </TouchableOpacity>
                <View className="w-[1px] bg-neutral-400 h-4"></View>
                <TouchableOpacity
                    onPress={() => handleSelected("Today")}
                    className={`px-4 py-1 ${
                        selectedDay === "Today"
                            ? "bg-neutral-200/10 rounded-md"
                            : ""
                    }`}
                >
                    <Text className="text-base font-okra_300 text-white">
                        Today
                    </Text>
                </TouchableOpacity>
                <View className="w-[1px] bg-neutral-400 h-4"></View>
                <TouchableOpacity
                    onPress={() => handleSelected("7 Day")}
                    className={`px-4 py-1 ${
                        selectedDay === "7 Day"
                            ? "bg-neutral-200/10 rounded-md"
                            : ""
                    }`}
                >
                    <Text className="text-base font-okra_300 text-white">
                        7 Day
                    </Text>
                </TouchableOpacity>
                <View className="w-[1px] bg-neutral-400 h-4"></View>
                <TouchableOpacity
                    onPress={() => handleSelected("30 Day")}
                    className={`px-4 py-1 ${
                        selectedDay === "30 Day"
                            ? "bg-neutral-200/10 rounded-md"
                            : ""
                    }`}
                >
                    <Text className="text-base font-okra_300 text-white">
                        30 Day
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        </LinearGradient>
    );
};

export default NotesHeader;
