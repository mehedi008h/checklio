import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const TaskHeader = () => {
    return (
        <LinearGradient
            // Button Linear Gradient
            colors={["#404040", "#293E33"]}
            start={[0, 0]}
            end={[0, 1]}
            className="w-full h-72 pt-24 px-4"
        >
            <View className="flex-1 flex-row justify-between items-center gap-x-3">
                <BlurView
                    intensity={10}
                    className="flex-1 h-16 w-full  rounded-md overflow-hidden p-4 flex-row items-center gap-2"
                >
                    <Entypo name="list" size={24} color="yellow" />
                    <View>
                        <Text className="text-base font-okra_700 font-bold text-neutral-300">
                            Total
                        </Text>
                        <Text className="text-sm font-okra_300 text-neutral-400">
                            5 tasks for today
                        </Text>
                    </View>
                </BlurView>
                <BlurView
                    intensity={10}
                    className="flex-1 h-16 w-full  rounded-md overflow-hidden p-4 flex-row items-center gap-2"
                >
                    <MaterialCommunityIcons
                        name="progress-clock"
                        size={24}
                        color="orange"
                    />
                    <View>
                        <Text className="text-base font-okra_700 font-bold text-neutral-300">
                            Progress
                        </Text>
                        <Text className="text-sm font-okra_300 text-neutral-400">
                            5 tasks for today
                        </Text>
                    </View>
                </BlurView>
            </View>
            <View className="flex-1 flex-row justify-between items-center gap-x-3 -mt-10">
                <BlurView
                    intensity={10}
                    className="flex-1 h-16 w-full  rounded-md overflow-hidden p-4 flex-row items-center gap-2"
                >
                    <MaterialCommunityIcons
                        name="timer-sand-complete"
                        size={24}
                        color="green"
                    />
                    <View>
                        <Text className="text-base font-okra_700 font-bold text-neutral-300">
                            Completed
                        </Text>
                        <Text className="text-sm font-okra_300 text-neutral-400">
                            5 tasks for today
                        </Text>
                    </View>
                </BlurView>
                <BlurView
                    intensity={10}
                    className="flex-1 h-16 w-full rounded-md overflow-hidden p-4 flex-row items-center gap-2"
                >
                    <MaterialIcons
                        name="incomplete-circle"
                        size={24}
                        color="red"
                    />
                    <View>
                        <Text className="text-base font-okra_700 font-bold text-neutral-300">
                            Incomplete
                        </Text>
                        <Text className="text-sm font-okra_300 text-neutral-400">
                            5 tasks for today
                        </Text>
                    </View>
                </BlurView>
            </View>
        </LinearGradient>
    );
};

export default TaskHeader;
