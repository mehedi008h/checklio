import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    Keyboard,
    FlatList,
} from "react-native";
import React, { useState } from "react";
import NoiseBackground from "@/components/common/NoiseBackground";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import Animated, {
    FadeInDown,
    FadeInUp,
    FadeOutDown,
    FadeOutUp,
    LinearTransition,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

const TakeNoteScreen = () => {
    const router = useRouter();
    const [noteTitle, setNoteTitle] = useState<string>("");
    const [noteContent, setNoteContent] = useState<string>("");
    const [noteTheme, setNoteTheme] = useState<[string, string]>([
        "#143852",
        "#ACACAC",
    ]);
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleContentChange = (text: string) => {
        setNoteContent(text);
    };
    const handleTitleChange = (text: string) => {
        setNoteTitle(text);
    };

    const handleErase = () => {
        setNoteContent("");
    };

    const handleThemeModal = () => {
        // Logic to change theme can be added here
        setOpenModal(!openModal);
        Keyboard.dismiss();
    };

    const handleThemeSelect = (theme: string[]) => {
        setNoteTheme([theme[0], theme[1]]);
        setOpenModal(false);
        Keyboard.dismiss();
    };

    return (
        <SafeAreaView>
            <NoiseBackground theme={noteTheme} />
            <ScrollView className="h-full w-full">
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    className="flex-1 justify-between items-center flex-row px-4 pt-10"
                >
                    {/* left button  */}
                    <TouchableOpacity onPress={() => router.back()}>
                        <BlurView
                            intensity={0}
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
                    <Animated.View
                        layout={LinearTransition.duration(400)}
                        className="flex-row gap-4 items-center"
                    >
                        {noteContent.length > 0 && (
                            <Animated.View
                                entering={FadeInUp.duration(400).delay(150)}
                                exiting={FadeOutUp.duration(400).delay(150)}
                                layout={LinearTransition.duration(400)}
                            >
                                <TouchableOpacity onPress={handleErase}>
                                    <BlurView
                                        intensity={50}
                                        tint="dark"
                                        className="w-12 h-12 rounded-full justify-center items-center overflow-hidden "
                                    >
                                        <Entypo
                                            name="eraser"
                                            size={24}
                                            color="red"
                                        />
                                    </BlurView>
                                </TouchableOpacity>
                            </Animated.View>
                        )}
                        <Animated.View
                            entering={FadeInUp.duration(400).delay(150)}
                            exiting={FadeOutUp.duration(400).delay(150)}
                            layout={LinearTransition.duration(400)}
                        >
                            <TouchableOpacity onPress={handleThemeModal}>
                                <BlurView
                                    intensity={50}
                                    tint="dark"
                                    className="w-12 h-12 rounded-full justify-center items-center overflow-hidden "
                                >
                                    <Feather
                                        name="feather"
                                        size={24}
                                        color="yellow"
                                    />
                                </BlurView>
                            </TouchableOpacity>
                        </Animated.View>
                        {noteContent.length > 0 && (
                            <Animated.View
                                entering={FadeInUp.duration(400).delay(150)}
                                exiting={FadeOutUp.duration(400).delay(150)}
                                layout={LinearTransition.duration(400)}
                            >
                                <TouchableOpacity onPress={() => router.back()}>
                                    <BlurView
                                        intensity={50}
                                        tint="dark"
                                        className="w-12 h-12 rounded-full justify-center items-center overflow-hidden "
                                    >
                                        <AntDesign
                                            name="save"
                                            size={24}
                                            color="#4ade80"
                                        />
                                    </BlurView>
                                </TouchableOpacity>
                            </Animated.View>
                        )}
                    </Animated.View>
                </KeyboardAvoidingView>

                <View className="p-4">
                    <TextInput
                        placeholder="Title"
                        className="font-okra_300 text-3xl text-neutral-50"
                        placeholderTextColor="#fafafa"
                        onChangeText={handleTitleChange}
                        value={noteTitle}
                    />
                    <View className="flex-row items-center gap-2 font-okra_300">
                        <Text className="text-neutral-200 font-okra_300">
                            {new Date().toLocaleDateString()}
                        </Text>
                        <Text className="text-neutral-200 font-okra_300">
                            {new Date().toLocaleTimeString()}
                        </Text>
                        <Text className="text-neutral-200 font-okra_300">
                            |
                        </Text>
                        <Animated.Text
                            layout={LinearTransition.duration(400)}
                            className="text-neutral-200 font-okra_300"
                        >
                            {noteContent.length}
                        </Animated.Text>
                        <Text className="text-neutral-200 font-okra_300">
                            Character
                        </Text>
                    </View>

                    <TextInput
                        className="bg-transparent rounded-md text-neutral-100  font-okra_300 mt-3"
                        placeholder="Write your note here..."
                        placeholderTextColor="#f5f5f5"
                        multiline={true}
                        numberOfLines={8}
                        onChangeText={handleContentChange}
                        value={noteContent}
                    />
                </View>
            </ScrollView>
            {openModal && (
                <Animated.View
                    entering={FadeInDown.duration(400).delay(150)}
                    exiting={FadeOutDown.duration(400).delay(150)}
                    layout={LinearTransition.duration(400)}
                    className="absolute bottom-0 right-0 left-0  bg-neutral-50 rounded-t-xl p-4"
                >
                    <View className="flex-row items-center justify-center absolute -top-5 left-0 right-0">
                        <AntDesign name="minus" size={60} color="maroon" />
                    </View>
                    <FlatList
                        data={[
                            ["#143852", "#ACACAC"] as [string, string],
                            ["#C890A7", "#A35C7A"] as [string, string],
                            ["#97866A", "#735557"] as [string, string],
                            ["#D3E671", "#89AC46"] as [string, string],
                            ["#1F7D53", "#255F38"] as [string, string],
                            ["#670D2F", "#3A0519"] as [string, string],
                        ]}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => handleThemeSelect(item)}
                                className="w-24 h-24 rounded-lg overflow-hidden"
                            >
                                <LinearGradient
                                    colors={item}
                                    start={[0, 0]}
                                    end={[0, 1]}
                                    className="w-24 h-24 bg-teal-500 rounded-md mt-5 overflow-hidden"
                                ></LinearGradient>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) =>
                            item.join("-") || index.toString()
                        }
                        horizontal
                        className="w-full flex-1 mt-1 mb-3"
                        ItemSeparatorComponent={() => (
                            <View className="w-2"></View>
                        )}
                        showsHorizontalScrollIndicator={false}
                    />
                </Animated.View>
            )}
        </SafeAreaView>
    );
};

export default TakeNoteScreen;
