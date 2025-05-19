import { View, Text, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";
import { BlurView } from "expo-blur";
import Animated, {
    FadeInDown,
    FadeInUp,
    FadeOutDown,
    LinearTransition,
} from "react-native-reanimated";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { useModalStore } from "@/store/useModalStore";
import AntDesign from "@expo/vector-icons/AntDesign";
import ActionModal from "./ActionModal";
import NoiseBackground from "./NoiseBackground";

interface Props {
    children: ReactNode;
}

const ModalProvider = ({ children }: Props) => {
    const { isOpen, closeModal } = useModalStore();

    return (
        <View className="flex-1">
            {children}
            {isOpen && (
                <Animated.View
                    entering={FadeInUp.duration(200).delay(50)}
                    className="absolute top-0 bottom-0 left-0 right-0 bg-neutral-900/50"
                >
                    <BlurView
                        tint="dark"
                        intensity={100}
                        className="w-full h-full"
                    ></BlurView>
                </Animated.View>
            )}
            {isOpen && (
                <Animated.View
                    entering={FadeInDown.duration(200).delay(50)}
                    exiting={FadeOutDown.duration(200).delay(50)}
                    layout={LinearTransition.duration(200)}
                    className="absolute bottom-0 right-0 left-0 top-[70%] rounded-t-xl p-4 overflow-hidden"
                >
                    <NoiseBackground />
                    {/* close button  */}
                    <View className="flex-row items-center justify-center absolute -top-5 left-0 right-0">
                        <AntDesign
                            onPress={closeModal}
                            name="minus"
                            size={60}
                            color="maroon"
                        />
                    </View>
                    <ActionModal />
                </Animated.View>
            )}
        </View>
    );
};

export default ModalProvider;
