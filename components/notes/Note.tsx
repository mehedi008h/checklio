import { View, Text, Dimensions } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import Ionicons from "@expo/vector-icons/Ionicons";

const Note = () => {
    const screenWidth = Dimensions.get("window").width;
    return (
        <BlurView
            tint="dark"
            intensity={30}
            className="h-52 bg-neutral-400 overflow-hidden rounded-md"
            style={{
                width: screenWidth * 0.46,
            }}
        >
            <View className="w-full h-10 bg-orange-200/10 justify-center px-3">
                <Text className="text-neutral-200 font-okra_900">
                    Shopping List
                </Text>
            </View>
            {/* <Ionicons
            name="create-outline"
            size={40}
            color="white"
            className="opacity-40"
        /> */}
            <View className="p-3">
                <Text className="mt-1 text-sm font-okra_300 text-neutral-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam, nihil?
                </Text>
            </View>
            <Text className="text-neutral-200 font-okra_900 absolute bottom-3 left-3">
                07 May
            </Text>
            <View className="absolute w-full h-full justify-center items-center">
                <Ionicons
                    name="create-outline"
                    size={70}
                    color="white"
                    className="opacity-5"
                />
            </View>
        </BlurView>
    );
};

export default Note;
