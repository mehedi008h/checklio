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
                <Text className="text-neutral-600 font-bold font-okra_900 text-lg">
                    Sat
                </Text>
                <Text className="text-neutral-500 font-normal font-okra_300 text-base">
                    15-12-2023
                </Text>
            </View>
            <View className="border-l-[1px] border-yellow-500 pl-3">
                <Text className="text-base font-okra_600 font-bold text-neutral-700">
                    7h 30m
                </Text>
                <View className="flex-row items-center gap-3">
                    <Text className="text-base font-okra_300 font-normal text-green-900 text-ellipsis">
                        Start at 9:00 AM
                    </Text>
                    <Text className="text-base font-okra_300 font-normal text-red-900 text-ellipsis">
                        End at 4:30 PM
                    </Text>
                </View>
            </View>
        </BlurView>
    );
};

export default WorkTimeData;
