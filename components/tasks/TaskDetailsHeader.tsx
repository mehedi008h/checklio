import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const TaskDetailsHeader = () => {
    const router = useRouter();
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
                className="absolute top-0 h-52 left-0 right-0 px-4 pt-8 flex-row justify-between"
            >
                {/* left button  */}
                <TouchableOpacity onPress={() => router.back()}>
                    <BlurView
                        intensity={50}
                        tint="dark"
                        className="w-12 h-12 rounded-full justify-center items-center overflow-hidden "
                    >
                        <Ionicons
                            name="arrow-undo-outline"
                            size={24}
                            color="white"
                        />
                    </BlurView>
                </TouchableOpacity>

                {/* right button */}
                <TouchableOpacity onPress={() => router.back()}>
                    <BlurView
                        intensity={50}
                        tint="dark"
                        className="w-12 h-12 rounded-full justify-center items-center overflow-hidden "
                    >
                        <AntDesign name="calendar" size={24} color="white" />
                    </BlurView>
                </TouchableOpacity>
            </BlurView>
        </View>
    );
};

export default TaskDetailsHeader;
