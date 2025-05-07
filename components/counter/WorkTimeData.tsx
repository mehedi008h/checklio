import { View, Text } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";

const WorkTimeData = () => {
    return (
        <BlurView
            intensity={20}
            tint="dark"
            className="h-fit w-full rounded-md overflow-hidden p-3 flex-row items-start gap-3 mb-3"
        >
            <View className="flex-col items-center justify-center">
                <Text className="text-neutral-200 font-bold font-okra_900 text-lg">
                    Sat
                </Text>
                <Text className="text-neutral-300 font-normal font-okra_300 text-base">
                    15-12-2023
                </Text>
            </View>
            <View className="border-l-[1px] border-yellow-500 pl-3">
                <Text className="text-base font-okra_600 font-bold text-neutral-200">
                    7h 30m
                </Text>
                <View className="flex-row items-center gap-3 mt-1">
                    <View className="bg-green-900/30 px-2 py-1 rounded-md">
                        <Text className="text-sm font-okra_300 font-normal text-neutral-100">
                            Start at 9:00 AM
                        </Text>
                    </View>
                    <View className="bg-red-900/30 px-2 py-1 rounded-md">
                        <Text className="text-sm font-okra_300 font-normal text-neutral-100">
                            End at 9:00 AM
                        </Text>
                    </View>
                </View>
            </View>
        </BlurView>
    );
};

export default WorkTimeData;
