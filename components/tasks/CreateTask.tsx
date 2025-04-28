import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import { BlurView } from "expo-blur";
import CustomeDatePicker from "../common/CustomeDatePicker";
import Tag from "../common/Tag";
import Animated, {
    FadeInDown,
    FadeOutDown,
    LinearTransition,
} from "react-native-reanimated";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

enum TaskPriority {
    Low = "Low",
    Medium = "Medium",
    High = "High",
}

const CreateTask = () => {
    const [taskPriority, setTaskPriority] = useState<TaskPriority>(
        TaskPriority.Low
    );
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const handleTaskPriority = (type: TaskPriority) => {
        setTaskPriority(type);
    };

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            "keyboardDidShow",
            () => setIsKeyboardVisible(true)
        );

        const keyboardDidHideListener = Keyboard.addListener(
            "keyboardDidHide",
            () => setIsKeyboardVisible(false)
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <View className="relative flex-1">
            <ScrollView>
                <BlurView
                    intensity={10}
                    tint="dark"
                    className="flex-1 m-4 rounded-md p-4 overflow-hidden"
                >
                    <KeyboardAvoidingView>
                        <View>
                            <View className="flex-row items-start gap-1">
                                <Text className="text-base font-okra_500 text-neutral-600 font-medium">
                                    Task Title
                                </Text>
                                <Text className="text-red-500">*</Text>
                            </View>
                            <TextInput
                                className="bg-transparent px-2 py-3 rounded-md border border-neutral-500 text-neutral-600  font-okra_400 mt-1"
                                placeholder="Task Title"
                                placeholderTextColor="#737373"
                            />
                        </View>

                        {/* start date & time  */}
                        <CustomeDatePicker
                            dateLabel="Start Date"
                            timeLabel="Start Time"
                            dateRequired
                        />

                        {/* end date & time  */}
                        <CustomeDatePicker
                            dateLabel="End Date"
                            timeLabel="End Time"
                            dateRequired
                        />

                        {/* task priority  */}
                        <View className="flex-row items-start gap-1 mt-4">
                            <Text className="text-base font-okra_500 text-neutral-600 font-medium">
                                Task Priority
                            </Text>
                            <Text className="text-red-500">*</Text>
                        </View>
                        <View className="flex-row items-center justify-between mt-2 gap-2">
                            <Tag
                                title={TaskPriority.Low}
                                onPress={() =>
                                    handleTaskPriority(TaskPriority.Low)
                                }
                                color={
                                    taskPriority === TaskPriority.Low
                                        ? "bg-blue-500"
                                        : ""
                                }
                            />
                            <Tag
                                title={TaskPriority.Medium}
                                onPress={() =>
                                    handleTaskPriority(TaskPriority.Medium)
                                }
                                color={
                                    taskPriority === TaskPriority.Medium
                                        ? "bg-yellow-500"
                                        : ""
                                }
                            />
                            <Tag
                                title={TaskPriority.High}
                                onPress={() =>
                                    handleTaskPriority(TaskPriority.High)
                                }
                                color={
                                    taskPriority === TaskPriority.High
                                        ? "bg-red-500"
                                        : ""
                                }
                            />
                        </View>

                        {/* task note  */}
                        <View className="mt-4">
                            <View className="flex-row items-start gap-1">
                                <Text className="text-base font-okra_500 text-neutral-600 font-medium">
                                    Task Note
                                </Text>
                                <Text className="text-red-500">*</Text>
                            </View>
                            <TextInput
                                className="bg-transparent p-3 rounded-md border border-neutral-500 text-neutral-600  font-okra_400 mt-1"
                                placeholder="Write your task note here..."
                                placeholderTextColor="#737373"
                                multiline={true}
                                numberOfLines={8}
                            />
                        </View>
                    </KeyboardAvoidingView>
                </BlurView>
            </ScrollView>

            {/* bottom section */}
            {/* if keyboard is not visible then show the bottom section */}
            {!isKeyboardVisible && (
                <Animated.View
                    entering={FadeInDown.duration(400).delay(150)}
                    exiting={FadeOutDown.duration(400).delay(150)}
                    layout={LinearTransition.duration(400)}
                    className="absolute bottom-0 left-0 right-0"
                >
                    <BlurView
                        tint="dark"
                        intensity={20}
                        className="flex-1 pb-4 flex-row justify-evenly items-center gap-2 px-4 bg-neutral-400"
                    >
                        <View className="flex-row items-center justify-between gap-2 ">
                            <TouchableOpacity className="flex-1">
                                <LinearGradient
                                    // Button Linear Gradient
                                    colors={["#a3a3a3", "#737373"]}
                                    start={[0, 0]}
                                    end={[0, 1]}
                                    className="w-full h-12 rounded-md justify-center items-center mt-4 overflow-hidden"
                                >
                                    <Text className="text-white font-okra_500">
                                        Reset
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity className="flex-1">
                                <LinearGradient
                                    // Button Linear Gradient
                                    colors={["#404040", "#293E33"]}
                                    start={[0, 0]}
                                    end={[0, 1]}
                                    className="w-full h-12 rounded-md justify-center items-center mt-4 overflow-hidden"
                                >
                                    <Text className="text-white font-okra_500">
                                        Create
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </BlurView>
                </Animated.View>
            )}
        </View>
    );
};

export default CreateTask;
