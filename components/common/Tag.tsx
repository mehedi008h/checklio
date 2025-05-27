import { Text } from "react-native";
import React from "react";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { BlurView } from "expo-blur";

interface TagProps {
    onPress?: () => void;
    title?: string;
    color?: string;
}

const Tag = ({ onPress, title, color }: TagProps) => {
    return (
        <RNBounceable
            onPress={onPress}
            className={`flex-1 rounded-md ${color}`}
        >
            <BlurView
                tint="dark"
                cssInterop={true}
                intensity={50}
                className="px-4 py-3 rounded-md items-center overflow-hidden"
            >
                <Text className="text-white font-okra_300">{title}</Text>
            </BlurView>
        </RNBounceable>
    );
};

export default Tag;
