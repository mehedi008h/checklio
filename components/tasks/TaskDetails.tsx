import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { BlurView } from "expo-blur";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Animated, {
    FadeInDown,
    FadeOutDown,
    LinearTransition,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

const TaskDetails = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    return (
        <View className="relative flex-1">
            <View className="h-20 w-20 bg-neutral-100 rounded-md absolute -top-10 left-5">
                <BlurView
                    tint="dark"
                    intensity={100}
                    className="h-full w-full rounded-md overflow-hidden justify-center items-center"
                >
                    <MaterialIcons
                        name="emoji-food-beverage"
                        size={40}
                        color="white"
                    />
                </BlurView>
            </View>

            <BlurView
                intensity={50}
                tint="dark"
                className="h-10 w-20 rounded-full justify-center items-center overflow-hidden py-2 px-4 absolute right-5 -top-12"
            >
                <Text className="text-base font-okra_500 text-white">High</Text>
            </BlurView>

            <View className="px-4 mt-16">
                <Text className="text-2xl font-okra_500 text-neutral-800">
                    Task Title
                </Text>
                <Text className="text-base font-okra_400 text-neutral-600 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque ut erat euismod, facilisis ligula nec, efficitur
                    ligula. Donec ac nunc id enim bibendum fringilla.
                </Text>

                <BlurView
                    intensity={20}
                    tint="dark"
                    className="py-3 px-4 rounded-md overflow-hidden flex-row items-center justify-between mt-4"
                >
                    <Text className="text-base font-okra_500 text-neutral-800">
                        Start Date :
                    </Text>
                    <View className="flex-row items-center gap-2">
                        <Text className="text-base font-okra_500 text-neutral-600">
                            12th March 2023
                        </Text>
                        <Text className="text-base font-okra_500 text-neutral-600">
                            12:00 PM
                        </Text>
                    </View>
                </BlurView>

                <BlurView
                    intensity={20}
                    tint="dark"
                    className="py-3 px-4 rounded-md overflow-hidden flex-row items-center justify-between mt-4"
                >
                    <Text className="text-base font-okra_500 text-neutral-800">
                        End Date :
                    </Text>
                    <View className="flex-row items-center gap-2">
                        <Text className="text-base font-okra_500 text-neutral-600">
                            12th March 2023
                        </Text>
                        <Text className="text-base font-okra_500 text-neutral-600">
                            12:00 PM
                        </Text>
                    </View>
                </BlurView>
            </View>

            {/* bottom section */}

            <Animated.View
                entering={FadeInDown.duration(400).delay(150)}
                exiting={FadeOutDown.duration(400).delay(150)}
                layout={LinearTransition.duration(400)}
                className="absolute bottom-0 left-0 right-0"
            >
                <BlurView
                    tint="dark"
                    intensity={20}
                    className="flex-1 py-3 flex-row justify-evenly items-center gap-2 px-4 bg-neutral-400"
                >
                    {/* delete task  */}
                    <TouchableOpacity
                        onPress={() => setOpenModal(true)}
                        className="h-12 w-12 justify-center items-center bg-red-900 rounded-full"
                    >
                        <AntDesign name="delete" size={20} color="white" />
                    </TouchableOpacity>

                    {/* update task */}
                    <TouchableOpacity className="h-12 w-12 justify-center items-center bg-blue-500 rounded-full">
                        <AntDesign name="edit" size={20} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity className="bg-green-800 rounded-full py-3 px-4 flex-row items-center gap-2">
                        <MaterialCommunityIcons
                            name="progress-clock"
                            size={20}
                            color="white"
                        />
                        <Text className="text-base font-okra_500 text-white text-center">
                            Mark as Completed
                        </Text>
                    </TouchableOpacity>
                </BlurView>
            </Animated.View>

            {openModal && (
                <Animated.View
                    entering={FadeInDown.duration(400).delay(150)}
                    exiting={FadeOutDown.duration(400).delay(150)}
                    layout={LinearTransition.duration(400)}
                    className="absolute bottom-0 right-0 left-0 top-[75%] bg-neutral-300 rounded-t-xl p-4"
                >
                    <View className="flex-col items-center justify-between gap-3">
                        <Ionicons
                            name="information-circle"
                            size={50}
                            color="#991b1b"
                        />
                        <Text className="text-base font-okra_500 text-neutral-800">
                            Are you sure you want to delete this task?
                        </Text>
                    </View>
                    <View className="flex-row bg-ne items-center justify-between gap-2 absolute bottom-4 left-4 right-4">
                        <TouchableOpacity
                            onPress={() => setOpenModal(false)}
                            className="flex-1"
                        >
                            <LinearGradient
                                // Button Linear Gradient
                                colors={["#a3a3a3", "#737373"]}
                                start={[0, 0]}
                                end={[0, 1]}
                                className="w-full h-12 rounded-md justify-center items-center mt-4 overflow-hidden"
                            >
                                <Text className="text-white font-okra_500">
                                    Cancle
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-1">
                            <LinearGradient
                                // Button Linear Gradient
                                colors={["#dc2626", "#ef4444"]}
                                start={[0, 0]}
                                end={[0, 1]}
                                className="w-full h-12 rounded-md justify-center items-center mt-4 overflow-hidden"
                            >
                                <Text className="text-white font-okra_500">
                                    Delete
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            )}
        </View>
    );
};

export default TaskDetails;
