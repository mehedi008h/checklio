import { View, Text, TouchableOpacity } from "react-native";
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
        <View className={`flex-1  rounded-md ${color}`}>
            <RNBounceable onPress={onPress}>
                <BlurView
                    tint="dark"
                    cssInterop={true}
                    intensity={50}
                    className="px-4 py-3 rounded-md items-center overflow-hidden"
                >
                    <Text className="text-white">{title}</Text>
                </BlurView>
            </RNBounceable>
        </View>
    );
};

export default Tag;
