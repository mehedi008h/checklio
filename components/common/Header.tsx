import { View, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

interface HeaderProps {
    title?: string;
    subtitle?: string;
    backButton?: boolean;
    gradientColors?: [string, string, ...string[]];
}

const Header: FC<HeaderProps> = ({
    title,
    subtitle,
    backButton,
    gradientColors = ["#404040", "#293E33"],
}) => {
    const router = useRouter();
    return (
        <LinearGradient
            // Button Linear Gradient
            colors={gradientColors}
            start={[0, 0]}
            end={[0, 1]}
            className="w-full h-fit pt-12 px-4 pb-4"
        >
            <View className="flex-row items-center gap-3">
                {backButton && (
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
                )}

                <View>
                    {title && (
                        <Text className="text-neutral-300 font-okra_700 text-xl font-bold">
                            {title}
                        </Text>
                    )}
                    {subtitle && (
                        <Text className="text-base font-okra_300 text-neutral-400">
                            {subtitle}
                        </Text>
                    )}
                </View>
            </View>
        </LinearGradient>
    );
};

export default Header;
