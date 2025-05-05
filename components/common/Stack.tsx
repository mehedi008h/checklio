import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
    FadeInDown,
    FadeInUp,
    FadeOutDown,
    LinearTransition,
} from "react-native-reanimated";
import { BlurView } from "expo-blur";

interface StackProps {
    day: string;
    value: number;
}

const Stack = ({ day = "Mon", value = 100 }: StackProps) => {
    const [open, setOpen] = useState<boolean>(false);
    // bar height
    let height =
        value === 10
            ? "h-2"
            : value === 20
            ? "h-4"
            : value === 30
            ? "h-6"
            : value === 40
            ? "h-8"
            : value === 50
            ? "h-10"
            : value === 60
            ? "h-12"
            : value === 70
            ? "h-14"
            : value === 80
            ? "h-16"
            : value === 90
            ? "h-[4.5rem]"
            : "h-20";

    // bar color
    let color: [string, string, ...string[]] =
        value <= 20
            ? ["#670D2F", "#3A0519"]
            : value <= 40
            ? ["#C890A7", "#A35C7A"]
            : value <= 60
            ? ["#97866A", "#735557"]
            : value <= 80
            ? ["#D3E671", "#89AC46"]
            : ["#1F7D53", "#255F38"];

    // open tooltip
    const openTooltip = () => {
        setOpen(!open);
    };

    // close tooltip
    const closeTooltip = () => {
        setOpen(false);
    };

    // autometic close tooltip after 1.5 sec
    useEffect(() => {
        const timeoutId = setTimeout(closeTooltip, 1500);
        return () => {
            clearTimeout(timeoutId);
        };
    });
    return (
        <View className="mb-4 flex-1 justify-end items-center h-32">
            <Animated.View
                entering={FadeInDown.duration(400).delay(value * 5)}
                exiting={FadeOutDown.duration(400).delay(150)}
                layout={LinearTransition.duration(400)}
                className={`w-4 ${height}`}
            >
                {open && (
                    <Animated.View
                        entering={FadeInUp.duration(400).delay(value * 5)}
                        exiting={FadeOutDown.duration(400).delay(150)}
                        layout={LinearTransition.duration(400)}
                        className="w-12 h-5 rounded-full  absolute -top-8 -left-4"
                    >
                        <BlurView
                            tint="dark"
                            intensity={50}
                            className="w-full h-full rounded-full justify-center items-center overflow-hidden"
                        >
                            <Text className="text-xs font-okra_300 text-neutral-100">
                                {value}
                            </Text>
                        </BlurView>
                    </Animated.View>
                )}

                <TouchableOpacity
                    className={`w-5 ${height}`}
                    onPress={openTooltip}
                >
                    <LinearGradient
                        colors={color}
                        className={`w-5 bg-red-500 rounded-md overflow-hidden ${height}`}
                    ></LinearGradient>
                </TouchableOpacity>
            </Animated.View>
            <Text className="text-neutral-300 font-okra_400 text-sm mt-1">
                {day}
            </Text>
        </View>
    );
};

export default Stack;
