import React, { useState } from "react";

import CustomSafeareaView from "@/components/common/CustomSafeAreaView";
import HomeHeader from "@/components/home/HomeHeader";
import {
    FlatList,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import NoiseBackground from "@/components/common/NoiseBackground";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import Entypo from "@expo/vector-icons/Entypo";
import Animated, {
    FadeInRight,
    FadeOutDown,
    LinearTransition,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import Task from "@/components/tasks/Task";
import { useNavigation, useRouter } from "expo-router";
import Note from "@/components/notes/Note";
import { useModalStore } from "@/store/useModalStore";

interface TaskTypeProps {
    title: string;
    selected: string;
    onPress: () => void;
}

const TaskType: React.FC<TaskTypeProps> = ({ title, selected, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <BlurView
                tint="dark"
                intensity={selected === title ? 70 : 30}
                className="w-fit px-5 py-2 rounded-full overflow-hidden"
            >
                <Text className="font-okra_300 text-neutral-100 text-base">
                    {title}
                </Text>
            </BlurView>
        </TouchableOpacity>
    );
};

const HomeScreen = () => {
    const router = useRouter();
    const [selected, setSelected] = useState<string>("All");
    const { openModal, setModalContent } = useModalStore();

    const handleSelected = (type: string) => {
        setSelected(type);
    };
    const navigateTOTasks = () => {
        router.navigate("/(tabs)/tasks");
    };

    const navigation = useNavigation();

    return (
        <CustomSafeareaView
            backgroundColor="transparent"
            barStyle="light"
            classStyle="flex-1 bg-neutral-100"
        >
            <NoiseBackground />

            {/* <RecentTasks /> */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <HomeHeader />
                <View className="flex-row my-5 gap-2 px-4 h-32">
                    <Animated.View
                        entering={FadeInRight.duration(400).delay(150)}
                        exiting={FadeOutDown.duration(400).delay(150)}
                        layout={LinearTransition.duration(400)}
                        className="w-[32%] bg-teal-900/30 rounded-md p-4 flex-col justify-between gap-1 relative"
                    >
                        <MaterialIcons
                            name="more-time"
                            size={34}
                            color="#d4d4d4"
                        />

                        <Text className="text-lg text-neutral-200 font-okra_700 font-bold">
                            07:00 AM
                        </Text>
                        <Text className="text-sm text-neutral-300 font-okra_300 font-normal">
                            Check In
                        </Text>
                    </Animated.View>
                    <Animated.View
                        entering={FadeInRight.duration(400).delay(150)}
                        exiting={FadeOutDown.duration(400).delay(150)}
                        layout={LinearTransition.duration(400)}
                        className="w-[32%] bg-pink-900/30 rounded-md p-4 flex-col justify-between gap-1 relative"
                    >
                        <MaterialCommunityIcons
                            name="timelapse"
                            size={34}
                            color="#d4d4d4"
                        />

                        <Text className="text-lg text-neutral-200 font-okra_700 font-bold">
                            07:00 AM
                        </Text>
                        <Text className="text-sm text-neutral-300 font-okra_300 font-normal">
                            Check Out
                        </Text>
                    </Animated.View>
                    <Animated.View
                        entering={FadeInRight.duration(400).delay(150)}
                        exiting={FadeOutDown.duration(400).delay(150)}
                        layout={LinearTransition.duration(400)}
                        className="w-[32%] bg-orange-900/30 rounded-md p-4 flex-col justify-between gap-1 relative"
                    >
                        <Entypo name="clock" size={30} color="#d4d4d4" />

                        <Text className="text-lg text-neutral-200 font-okra_700 font-bold">
                            07 Hours
                        </Text>
                        <Text className="text-sm text-neutral-300 font-okra_300 font-normal">
                            Total
                        </Text>
                    </Animated.View>
                </View>

                <View className="px-4">
                    <BlurView
                        tint="dark"
                        intensity={30}
                        className="p-3 rounded-md overflow-hidden items-center"
                    >
                        <MaterialIcons
                            name="emoji-objects"
                            size={40}
                            color="orange"
                        />
                        <Text className="text-xl font-okra_500 font-medium text-neutral-100 capitalize mt-2">
                            Make your day more productive
                        </Text>
                        <Text className="text-sm font-okra_300 text-neutral-300">
                            Growth your daily plan by taking note and creating
                            task
                        </Text>
                        <TouchableOpacity
                            onPress={openModal}
                            className="mt-3 w-full"
                        >
                            <LinearGradient
                                // Button Linear Gradient
                                colors={["#404040", "#293E33"]}
                                start={[0, 0]}
                                end={[0, 1]}
                                className="w-full h-12 rounded-md justify-center items-center overflow-hidden"
                            >
                                <Text className="text-white font-okra_500">
                                    Make your plan
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </BlurView>

                    <View className="flex-row justify-between items-center mt-4">
                        <Text className="text-lg font-bold font-okra_700 text-neutral-600">
                            Your Notes
                        </Text>
                        <TouchableOpacity
                            onPress={navigateTOTasks}
                            className="flex-row items-center gap-1"
                        >
                            <MaterialIcons
                                name="arrow-forward-ios"
                                size={18}
                                color="#525252"
                            />
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={["All", "Progress", "Complete", "Incomplete"]}
                        renderItem={({ item }) => <Note />}
                        keyExtractor={(item) => item}
                        horizontal
                        className="w-full flex-1 mt-1 mb-3"
                        ItemSeparatorComponent={() => (
                            <View className="w-2"></View>
                        )}
                        showsHorizontalScrollIndicator={false}
                    />

                    <View className="flex-row justify-between items-center mt-4">
                        <Text className="text-lg font-bold font-okra_700 text-neutral-600">
                            Your Plan
                        </Text>
                        <TouchableOpacity
                            onPress={navigateTOTasks}
                            className="flex-row items-center gap-1"
                        >
                            <MaterialIcons
                                name="arrow-forward-ios"
                                size={18}
                                color="#525252"
                            />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={["All", "Progress", "Complete", "Incomplete"]}
                        renderItem={({ item }) => (
                            <TaskType
                                title={item}
                                selected={selected}
                                onPress={() => handleSelected(item)}
                            />
                        )}
                        keyExtractor={(item) => item}
                        horizontal
                        className="w-full flex-1 mt-1 mb-3"
                        ItemSeparatorComponent={() => (
                            <View className="w-2"></View>
                        )}
                        showsHorizontalScrollIndicator={false}
                    />

                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                </View>
            </ScrollView>
        </CustomSafeareaView>
    );
};

export default HomeScreen;
