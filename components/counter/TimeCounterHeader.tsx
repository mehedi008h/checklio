import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";

const TimeCounterHeader = () => {
    const ring1padding = useSharedValue(0);
    const ring2padding = useSharedValue(0);

    // state to store time
    const [time, setTime] = useState(0);

    // state to check stopwatch running or not
    const [isRunning, setIsRunning] = useState<boolean>(false);

    useEffect(() => {
        let intervalId: number;
        if (isRunning) {
            // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
            intervalId = setInterval(() => setTime(time + 1), 10);
        }
        return () => clearInterval(intervalId);
    }, [isRunning, time]);

    // Hours calculation
    const hours = Math.floor(time / 360000);

    // Minutes calculation
    const minutes = Math.floor((time % 360000) / 6000);

    // Seconds calculation
    const seconds = Math.floor((time % 6000) / 100);

    // Milliseconds calculation
    const milliseconds = time % 100;

    // Method to start and stop timer
    const startAndStop = () => {
        setIsRunning(!isRunning);
    };

    // Method to reset timer back to 0
    const reset = () => {
        setTime(0);
    };

    const handleStartCount = () => {
        setIsRunning(!isRunning);
        startAndStop();
    };

    useEffect(() => {
        ring1padding.value = 0;
        ring2padding.value = 0;
        setTimeout(
            () => (ring1padding.value = withSpring(ring1padding.value + 30)),
            100
        );
        setTimeout(
            () => (ring2padding.value = withSpring(ring2padding.value + 30.5)),
            300
        );

        // setTimeout(() => router.push("/(tabs)/home"), 2500);
    }, []);
    return (
        <LinearGradient
            colors={["#97866A", "#735557"]}
            start={[0, 0]}
            end={[0, 1]}
            className="justify-end items-center h-96 space-y-10 bg-amber-500 pb-4"
        >
            <Animated.View
                className="bg-white/20 rounded-full"
                style={{ padding: ring2padding }}
            >
                <Animated.View
                    className="bg-white/20 rounded-full"
                    style={{ padding: ring1padding }}
                >
                    <TouchableOpacity onPress={handleStartCount}>
                        {!isRunning ? (
                            <Ionicons
                                name="play-circle-outline"
                                size={80}
                                color="#115e59"
                            />
                        ) : (
                            <Ionicons
                                name="pause-circle-outline"
                                size={80}
                                color="#991b1b"
                            />
                        )}
                    </TouchableOpacity>
                </Animated.View>
            </Animated.View>

            <BlurView
                tint="dark"
                className="mt-5 rounded-full overflow-hidden p-3"
            >
                <View className="flex-col justify-between items-center w-full px-4">
                    <Text className="text-2xl font-okra_700 font-bold text-neutral-300">
                        {hours}:{minutes.toString().padStart(2, "0")}:
                        {seconds.toString().padStart(2, "0")}:
                        {milliseconds.toString().padStart(2, "0")}
                    </Text>
                    {/* <Text className="text-base font-okra_300 text-neutral-400">
                        {new Date().toString().slice(0, 15)}
                    </Text> */}
                </View>
            </BlurView>
        </LinearGradient>
    );
};

export default TimeCounterHeader;
