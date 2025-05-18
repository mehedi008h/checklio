import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import NoiseBackground from "@/components/common/NoiseBackground";
import CustomSafeareaView from "@/components/common/CustomSafeAreaView";
import Animated, {
    FadeInDown,
    FadeInRight,
    FadeOutDown,
    FadeOutRight,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const CounterScreen = () => {
    const ring1padding = useSharedValue(0);
    const ring2padding = useSharedValue(0);
    const router = useRouter();

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
            () => (ring1padding.value = withSpring(ring1padding.value + 50)),
            300
        );
        setTimeout(
            () => (ring2padding.value = withSpring(ring2padding.value + 50.5)),
            300
        );

        // setTimeout(() => router.push("/(tabs)/home"), 2500);
    }, []);
    return (
        <CustomSafeareaView
            backgroundColor="transparent"
            barStyle="light"
            classStyle="flex-1 bg-neutral-100"
        >
            <NoiseBackground />
            <View className="flex-row justify-between p-4 mt-8">
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
                {!!time && !isRunning && (
                    <TouchableOpacity onPress={reset}>
                        <Animated.View
                            entering={FadeInRight.duration(400).delay(150)}
                            exiting={FadeOutRight.duration(400).delay(150)}
                            className="w-12 h-12"
                        >
                            <BlurView
                                intensity={50}
                                tint="dark"
                                className="w-full h-full rounded-full justify-center items-center overflow-hidden "
                            >
                                <FontAwesome5
                                    name="stop-circle"
                                    size={24}
                                    color="red"
                                />
                            </BlurView>
                        </Animated.View>
                    </TouchableOpacity>
                )}
            </View>

            <View className="flex-1 items-center justify-center py-10">
                <Animated.View
                    entering={FadeInDown.duration(400).delay(150)}
                    exiting={FadeOutDown.duration(400).delay(150)}
                    className="w-full justify-center items-center absolute top-16 gap-3"
                >
                    <BlurView
                        tint="dark"
                        className="w-fit rounded-full overflow-hidden p-3"
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
                </Animated.View>
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
                                    color="#404040"
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
            </View>
        </CustomSafeareaView>
    );
};

export default CounterScreen;
