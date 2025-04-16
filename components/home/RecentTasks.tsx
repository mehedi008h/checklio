import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Task from "../tasks/Task";
import { useRouter } from "expo-router";

const RecentTasks = () => {
    const router = useRouter();
    const navigateTOTasks = () => {
        router.navigate("/(tabs)/tasks");
    };
    return (
        <View className="p-4 h-full bg-neutral-200">
            {/* header  */}
            <View className="flex-row justify-between items-center mb-3">
                <Text className="text-xl font-bold font-okra_700 text-neutral-700">
                    Your Planner ( 7 Activity)
                </Text>
                <TouchableOpacity
                    onPress={navigateTOTasks}
                    className="flex-row items-center gap-1"
                >
                    <Text className="font-base text-sm uppercase text-neutral-600">
                        Show All
                    </Text>
                    <MaterialIcons
                        name="arrow-forward-ios"
                        size={12}
                        color="#525252"
                    />
                </TouchableOpacity>
            </View>

            {/* recent tasks */}

            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <Task />
                <Task /> <Task /> <Task /> <Task /> <Task /> <Task />
                <Task /> <Task /> <Task /> <Task /> <Task /> <Task />
            </ScrollView>
        </View>
    );
};

export default RecentTasks;
