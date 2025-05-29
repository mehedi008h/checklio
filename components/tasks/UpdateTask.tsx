import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    Keyboard,
    ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { BlurView } from "expo-blur";
import { Controller, useForm } from "react-hook-form";
import Animated, {
    FadeInDown,
    FadeOutDown,
    LinearTransition,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

import CustomeDatePicker from "../common/CustomeDatePicker";
import Tag from "../common/Tag";
import { useRouter } from "expo-router";

// task priority
enum TaskPriority {
    Low = "Low",
    Medium = "Medium",
    High = "High",
}

// task type
export interface Task {
    title: string;
    startDate: string;
    endDate: string;
    taskPriority: TaskPriority;
    taskNote: string;
}

const UpdateTask = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [isKeyboardVisible, setIsKeyboardVisible] = useState<boolean>(false);
    const [taskPriority, setTaskPriority] = useState<TaskPriority>(
        TaskPriority.Low
    );

    const router = useRouter();

    const goBack = () => {
        router.back();
    };

    const {
        control,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm<Task>({
        defaultValues: {
            title: "",
            startDate: "",
            endDate: "",
            taskPriority: TaskPriority.Low,
            taskNote: "",
        },
    });

    // handle task priority
    const handleTaskPriority = (type: TaskPriority) => {
        setTaskPriority(type);
        setCustomValue("taskPriority", type);
    };

    // handle custome value
    const setCustomValue = (id: any, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
        });
    };

    // handle form submit
    const onSubmit = async (task: Task) => {
        Keyboard.dismiss();
        setLoading(true);
        console.log("Data: ", JSON.stringify(task));

        // try {
        //   await addDonar(data);
        //   resetAndNavigate('BottomTabNavigation');
        // } catch (error: any) {
        //   Alert.alert('Error', error.message);
        // } finally {
        //   setLoading(false);
        // }
    };

    // handle keyboard visibility
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
                        {/* task title  */}
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <View>
                                    {/* task title  */}
                                    <View className="flex-row items-start gap-1">
                                        <Text className="text-base font-okra_500 text-neutral-200 font-medium">
                                            Task Title
                                        </Text>
                                        <Text className="text-red-700">*</Text>
                                    </View>
                                    <TextInput
                                        className={`bg-transparent px-2 py-3 rounded-md border text-neutral-300  font-okra_400 mt-1 ${
                                            errors.title
                                                ? "border-red-700"
                                                : "border-neutral-400"
                                        }`}
                                        placeholder="Task Title"
                                        placeholderTextColor="#d4d4d4"
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                    {errors.title && (
                                        <Text className="text-red-700 text-sm font-okra_400 mt-1">
                                            Task title is required
                                        </Text>
                                    )}
                                </View>
                            )}
                            name="title"
                        />

                        {/* start date & time  */}
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <CustomeDatePicker
                                    dateLabel="Start Date"
                                    timeLabel="Start Time"
                                    dateRequired
                                    name="startDate"
                                    value={value}
                                    setCustomeValue={setCustomValue}
                                    error={errors.startDate ? true : false}
                                    errorMessage="Start date & time is required"
                                />
                            )}
                            name="startDate"
                        />

                        {/* end date & time  */}
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <CustomeDatePicker
                                    dateLabel="End Date"
                                    timeLabel="End Time"
                                    dateRequired
                                    name="endDate"
                                    value={value}
                                    setCustomeValue={setCustomValue}
                                    error={errors.endDate ? true : false}
                                    errorMessage="End date & time is required"
                                />
                            )}
                            name="endDate"
                        />

                        {/* task priority  */}
                        <View className="flex-row items-center gap-1 mt-4">
                            <Text className="text-base font-okra_300 text-neutral-200 font-medium">
                                Task Priority
                            </Text>
                            <Text className="text-neutral-300 text-sm font-okra_300">
                                (Default LOW)
                            </Text>
                        </View>

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <View className="flex-row items-center justify-between mt-2 gap-2">
                                    <Tag
                                        title={TaskPriority.Low}
                                        onPress={() =>
                                            handleTaskPriority(TaskPriority.Low)
                                        }
                                        color={
                                            value === TaskPriority.Low
                                                ? "bg-blue-500"
                                                : ""
                                        }
                                    />
                                    <Tag
                                        title={TaskPriority.Medium}
                                        onPress={() =>
                                            handleTaskPriority(
                                                TaskPriority.Medium
                                            )
                                        }
                                        color={
                                            value === TaskPriority.Medium
                                                ? "bg-yellow-500"
                                                : ""
                                        }
                                    />
                                    <Tag
                                        title={TaskPriority.High}
                                        onPress={() =>
                                            handleTaskPriority(
                                                TaskPriority.High
                                            )
                                        }
                                        color={
                                            value === TaskPriority.High
                                                ? "bg-red-500"
                                                : ""
                                        }
                                    />
                                </View>
                            )}
                            name="taskPriority"
                        />

                        {/* task note  */}
                        <Controller
                            control={control}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <View className="mt-4">
                                    <View className="flex-row items-center gap-1">
                                        <Text className="text-base font-okra_300 text-neutral-200 font-medium">
                                            Task Note
                                        </Text>
                                        <Text className="text-neutral-300 text-sm font-okra_300">
                                            (Optional)
                                        </Text>
                                    </View>
                                    <TextInput
                                        className="bg-transparent p-3 rounded-md border border-neutral-400 text-neutral-300  font-okra_400 mt-1"
                                        placeholder="Write your task note here..."
                                        placeholderTextColor="#d4d4d4"
                                        multiline={true}
                                        numberOfLines={8}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                </View>
                            )}
                            name="taskNote"
                        />
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
                            <TouchableOpacity
                                onPress={loading ? () => {} : goBack}
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
                            <TouchableOpacity
                                onPress={
                                    loading ? () => {} : handleSubmit(onSubmit)
                                }
                                className="flex-1"
                            >
                                <LinearGradient
                                    // Button Linear Gradient
                                    colors={["#404040", "#293E33"]}
                                    start={[0, 0]}
                                    end={[0, 1]}
                                    className="w-full h-12 rounded-md justify-center items-center mt-4 overflow-hidden"
                                >
                                    {loading ? (
                                        <ActivityIndicator
                                            className="text-neutral-400"
                                            size="small"
                                        />
                                    ) : (
                                        <Text className="text-white font-okra_500">
                                            Update
                                        </Text>
                                    )}
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </BlurView>
                </Animated.View>
            )}
        </View>
    );
};

export default UpdateTask;
