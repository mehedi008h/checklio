import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import CustomSafeareaView from "@/components/common/CustomSafeAreaView";
import ProfileHeader from "@/components/profile/ProfileHeader";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import WorkTime from "@/components/counter/WorkTime";
import NoiseBackground from "@/components/common/NoiseBackground";
import { useRouter } from "expo-router";

const TimeCounterScreen = () => {
    const router = useRouter();
    return (
        <CustomSafeareaView
            backgroundColor="transparent"
            barStyle="light"
            classStyle="flex-1 bg-neutral-100"
        >
            <NoiseBackground />
            {/* <View className="absolute top-0 right-0 bottom-0 left-0">
                <Image
                    source={require("../../assets/images/todo_bg.png")}
                    resizeMode="repeat"
                    className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
                />
            </View> */}
            <ProfileHeader />

            <View className="flex-1 items-center mb-28">
                <View className="w-[95%] min-h-fit bg-neutral-200 rounded-lg -mt-14 p-3">
                    {/* <Text className="text-lg font-okra_500 text-neutral-600">
                        Growth your daily goals
                    </Text> */}
                    <View className="mt-2 flex-row items-center justify-between">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                            (day) => (
                                <TouchableOpacity key={day}>
                                    <BlurView
                                        intensity={20}
                                        tint="dark"
                                        className="w-12 h-12 rounded-full justify-center items-center overflow-hidden "
                                    >
                                        <FontAwesome5
                                            name="fire"
                                            size={24}
                                            color="orange"
                                        />
                                    </BlurView>
                                    <Text className="text-sm text-neutral-500 text-center mt-1">
                                        {day}
                                    </Text>
                                </TouchableOpacity>
                            )
                        )}
                    </View>

                    <TouchableOpacity onPress={() => router.push("/counter")}>
                        <LinearGradient
                            // Button Linear Gradient
                            colors={["#3b82f6", "#2563eb"]}
                            start={[0, 0]}
                            end={[0, 1]}
                            className="w-full h-12 rounded-md justify-center items-center mt-4 overflow-hidden"
                        >
                            <Text className="text-white font-okra_500">
                                Growth your daily mission
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
            <WorkTime />
        </CustomSafeareaView>
    );
};

export default TimeCounterScreen;
