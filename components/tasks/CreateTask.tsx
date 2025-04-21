import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import { BlurView } from "expo-blur";
import CustomeDatePicker from "../common/CustomeDatePicker";
import Tag from "../common/Tag";

enum TaskPriority {
    Low = "Low",
    Medium = "Medium",
    High = "High",
}

const CreateTask = () => {
    const [taskPriority, setTaskPriority] = useState<TaskPriority>(
        TaskPriority.Low
    );
    const handleTaskPriority = (type: TaskPriority) => {
        setTaskPriority(type);
    };
    return (
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
                            onPress={() => handleTaskPriority(TaskPriority.Low)}
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
    );
};

export default CreateTask;
