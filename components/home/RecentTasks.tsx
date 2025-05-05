import React, { useLayoutEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation, useRouter } from "expo-router";
import Task from "../tasks/Task";
import Animated, {
    FadeInDown,
    FadeOutDown,
    LinearTransition,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

const RecentTasks = () => {
    const router = useRouter();
    const navigation = useNavigation();
    const [openModal, setOpenModal] = useState(false);

    const navigateTOTasks = () => {
        router.navigate("/(tabs)/tasks");
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            tabBarStyle: {
                display: openModal ? "none" : "flex",
            },
        });
    }, [navigation, openModal]);

    return (
        <View className="px-4 pb-72 pt-4 h-full  relative ">
            {/* header  */}
            <View className="flex-row justify-between items-center mb-3">
                <Text className="text-xl font-bold font-okra_700 text-neutral-700">
                    Your Planner ( 7 Activity)
                </Text>
                <TouchableOpacity
                    onPress={navigateTOTasks}
                    className="flex-row items-center gap-1"
                >
                    <Text className="font-base text-sm uppercase text-neutral-600">
                        Show All
                    </Text>
                    <MaterialIcons
                        name="arrow-forward-ios"
                        size={12}
                        color="#525252"
                    />
                </TouchableOpacity>
            </View>

            {/* recent tasks */}

            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <Task onPress={() => router.push("/taskDetails")} />
                <Task onPress={() => router.push("/taskDetails")} />
                <Task onPress={() => router.push("/taskDetails")} />
                <Task onPress={() => router.push("/taskDetails")} />
                <Task onPress={() => router.push("/taskDetails")} />
                <Task onPress={() => router.push("/taskDetails")} />
                <Task onPress={() => router.push("/taskDetails")} />
                <Task onPress={() => router.push("/taskDetails")} />
                <Task onPress={() => router.push("/taskDetails")} />
                <Task onPress={() => router.push("/taskDetails")} />
                <Task onPress={() => router.push("/taskDetails")} />
                <Task onPress={() => router.push("/taskDetails")} />
                <Task onPress={() => router.push("/taskDetails")} />
                <Task onPress={() => router.push("/taskDetails")} />
            </ScrollView>
            {openModal && (
                <Animated.View
                    entering={FadeInDown.duration(400).delay(150)}
                    exiting={FadeOutDown.duration(400).delay(150)}
                    layout={LinearTransition.duration(400)}
                    className="absolute bottom-0 right-0 left-0 top-[50%] bg-neutral-300 rounded-t-xl p-4"
                >
                    <Task />
                    <View className="flex-row bg-ne items-center justify-between gap-2">
                        <TouchableOpacity className="flex-1">
                            <LinearGradient
                                // Button Linear Gradient
                                colors={["#a3a3a3", "#737373"]}
                                start={[0, 0]}
                                end={[0, 1]}
                                className="w-full h-12 rounded-md justify-center items-center mt-4 overflow-hidden"
                            >
                                <Text className="text-white font-okra_500">
                                    Cancle
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-1">
                            <LinearGradient
                                // Button Linear Gradient
                                colors={["#3b82f6", "#2563eb"]}
                                start={[0, 0]}
                                end={[0, 1]}
                                className="w-full h-12 rounded-md justify-center items-center mt-4 overflow-hidden"
                            >
                                <Text className="text-white font-okra_500">
                                    Progress
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            )}
        </View>
    );
};

export default RecentTasks;
