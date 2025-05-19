import React, { useEffect, useState } from "react";

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

import { Dimensions } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Animated, {
    FadeInDown,
    FadeInRight,
    FadeOutDown,
    LinearTransition,
} from "react-native-reanimated";
import RecentTasks from "@/components/home/RecentTasks";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import Ionicons from "@expo/vector-icons/Ionicons";
import { times } from "lodash";
import Task from "@/components/tasks/Task";
import { useFocusEffect, useNavigation, useRouter } from "expo-router";
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
    // const [openModal, setOpenModal] = useState<boolean>(false);
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
            {/* <View className="absolute top-0 right-0 bottom-0 left-0">
                <Image
                    source={require("../../assets/images/todo_bg.png")}
                    resizeMode="repeat"
                    className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
                />
            </View> */}

            <NoiseBackground />
            <HomeHeader />
            {/* <RecentTasks /> */}
            <ScrollView showsVerticalScrollIndicator={false}>
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

                    {/* <View className="my-4 flex-row justify-between">
                        <BlurView
                            tint="dark"
                            intensity={30}
                            className="w-[48%] h-52 bg-neutral-400 overflow-hidden rounded-md "
                        >
                            <View className="w-full h-10 bg-orange-200/10"></View>
                            <View className="w-full h-10 border-b border-orange-200/30"></View>
                            <View className="w-full h-10 border-b border-orange-200/30"></View>
                            <View className="w-full h-10 border-b border-orange-200/30"></View>

                            <View className="absolute w-full h-full justify-center items-center">
                                <Ionicons
                                    name="create-outline"
                                    size={70}
                                    color="white"
                                    className="opacity-5"
                                />
                            </View>
                        </BlurView>
                        
                    </View> */}

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
            {/* {openModal && (
                <Animated.View
                    entering={FadeInDown.duration(400).delay(150)}
                    exiting={FadeOutDown.duration(400).delay(150)}
                    layout={LinearTransition.duration(400)}
                    className="absolute bottom-0 right-0 left-0 top-[75%] bg-neutral-300 rounded-t-xl p-4"
                >
                    <View className="flex-col items-center justify-between gap-3">
                        <Ionicons
                            name="information-circle"
                            size={50}
                            color="#991b1b"
                        />
                        <Text className="text-base font-okra_500 text-neutral-800">
                            Are you sure you want to delete this task?
                        </Text>
                    </View>
                    <View className="flex-row bg-ne items-center justify-between gap-2 absolute bottom-4 left-4 right-4">
                        <TouchableOpacity
                            onPress={() => setOpenModal(false)}
                            className="flex-1"
                        >
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
                                colors={["#dc2626", "#ef4444"]}
                                start={[0, 0]}
                                end={[0, 1]}
                                className="w-full h-12 rounded-md justify-center items-center mt-4 overflow-hidden"
                            >
                                <Text className="text-white font-okra_500">
                                    Delete
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            )} */}
        </CustomSafeareaView>
    );
};

export default HomeScreen;
