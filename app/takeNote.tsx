import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
} from "react-native";
import React, { useRef, useState } from "react";
import NoiseBackground from "@/components/common/NoiseBackground";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import Animated, {
    FadeInUp,
    FadeOutUp,
    LinearTransition,
} from "react-native-reanimated";

const TakeNoteScreen = () => {
    const router = useRouter();
    const [noteTitle, setNoteTitle] = useState<string>("");
    const [noteContent, setNoteContent] = useState<string>("");

    const handleContentChange = (text: string) => {
        setNoteContent(text);
    };
    const handleTitleChange = (text: string) => {
        setNoteTitle(text);
    };

    const handleErase = () => {
        setNoteContent("");
    };

    return (
        <SafeAreaView>
            <NoiseBackground />
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
                            <TouchableOpacity onPress={() => router.back()}>
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
        </SafeAreaView>
    );
};

export default TakeNoteScreen;
