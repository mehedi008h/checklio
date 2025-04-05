import { View, Text, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const NoiseBackground = () => {
    return (
        <LinearGradient
            colors={["#143852", "#ACACAC"]}
            start={[0, 0]}
            end={[0, 1]}
            className="flex-1 absolute top-0 right-0 bottom-0 left-0 "
        >
            <Image
                source={require("../../assets/images/todo_bg.png")}
                resizeMode="repeat"
                className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
            />
        </LinearGradient>
    );
};

export default NoiseBackground;
