import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { useModalStore } from "@/store/useModalStore";

enum ActionType {
    NOTE = "note",
    TASK = "task",
}

const ActionModal = () => {
    const router = useRouter();
    const { closeModal } = useModalStore();

    const handleRouter = (type: ActionType) => {
        if (type === ActionType.TASK) {
            router.push("/addTask");
        } else {
            router.push("/taskDetails");
        }
        closeModal();
    };
    return (
        <View className="flex-row items-center justify-between gap-5 absolute bottom-4 left-4 right-4">
            <TouchableOpacity
                onPress={() => handleRouter(ActionType.TASK)}
                className="flex-1 my-4 flex-row justify-between"
            >
                <BlurView
                    tint="dark"
                    intensity={50}
                    className="w-full h-52 overflow-hidden rounded-md justify-center items-center"
                >
                    <Image
                        className="w-24 h-24"
                        source={require("../../assets/images/to-do-list.png")}
                    />
                </BlurView>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => handleRouter(ActionType.NOTE)}
                className="flex-1 my-4 flex-row justify-between"
            >
                <BlurView
                    tint="dark"
                    intensity={50}
                    className="w-full h-52 overflow-hidden rounded-md justify-center items-center"
                >
                    <Image
                        className="w-24 h-24"
                        source={require("../../assets/images/notes.png")}
                    />
                </BlurView>
            </TouchableOpacity>
        </View>
    );
};

export default ActionModal;
