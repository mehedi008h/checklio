import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import Ionicons from "@expo/vector-icons/Ionicons";

const ProfileHeader = () => {
    return (
        <LinearGradient
            // Button Linear Gradient
            colors={["#404040", "#293E33"]}
            start={[0, 0]}
            end={[0, 1]}
            className="w-full h-fit  px-4 py-10"
        >
            <View className="flex flex-row justify-between items-center">
                <View className="h-14 w-14 rounded-full border-2 border-neutral-200 overflow-hidden">
                    <Image
                        source={require("../../assets/images/profile.jpg")}
                        className=" w-full h-full rounded-full"
                        resizeMode="stretch"
                    />
                </View>
                <TouchableOpacity>
                    <BlurView
                        intensity={20}
                        className="w-12 h-12 rounded-full justify-center items-center overflow-hidden "
                    >
                        <Ionicons
                            name="settings-outline"
                            size={24}
                            color="white"
                        />
                    </BlurView>
                </TouchableOpacity>
            </View>
            <View className="h-20"></View>
        </LinearGradient>
    );
};

export default ProfileHeader;
