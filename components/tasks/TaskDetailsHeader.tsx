import { View, Text, Image } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";

const TaskDetailsHeader = () => {
    return (
        <View className="h-52 w-full">
            <Image
                source={require("../../assets/images/cover.jpg")}
                resizeMode="cover"
                className="h-full w-full"
            />
            <BlurView
                tint="dark"
                intensity={50}
                className="absolute top-0 h-52 left-0 right-0"
            ></BlurView>
        </View>
    );
};

export default TaskDetailsHeader;
