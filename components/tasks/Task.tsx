import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";

interface TaskProps {
    onPress?: () => void;
}

const Task = ({ onPress }: TaskProps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <BlurView
                intensity={20}
                tint="dark"
                className="h-fit w-full rounded-md overflow-hidden p-3 flex-row items-start gap-3 mb-3"
            >
                <Text className="text-neutral-200 font-bold font-okra_900 text-lg">
                    07:30 AM
                </Text>
                <View className="border-l-[1px] border-yellow-500 pl-3">
                    <Text className="text-base font-okra_500 font-medium text-neutral-200">
                        Meeting with John Doe
                    </Text>
                    <Text className="text-sm font-okra_300 text-neutral-300 text-ellipsis">
                        Discuss project updates and next steps.
                    </Text>
                </View>
            </BlurView>
        </TouchableOpacity>
    );
};

export default Task;
