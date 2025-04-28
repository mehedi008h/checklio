import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const AddTaskHeader = () => {
    const router = useRouter();
    return (
        <LinearGradient
            // Button Linear Gradient
            colors={["#404040", "#293E33"]}
            start={[0, 0]}
            end={[0, 1]}
            className="w-full h-fit pt-12 px-4 pb-4"
        >
            <View className="flex-row items-center gap-3">
                <TouchableOpacity onPress={() => router.back()}>
                    <BlurView
                        intensity={50}
                        tint="dark"
                        className="w-10 h-10 rounded-full justify-center items-center overflow-hidden "
                    >
                        <Ionicons
                            name="arrow-undo-outline"
                            size={20}
                            color="white"
                        />
                    </BlurView>
                </TouchableOpacity>
                <View>
                    <Text className="text-neutral-300 font-okra_700 text-xl font-bold">
                        Add Your Task
                    </Text>
                    <Text className="text-base font-okra_300 text-neutral-400">
                        Let's make your day more productive 😊
                    </Text>
                </View>
            </View>
        </LinearGradient>
    );
};

export default AddTaskHeader;
