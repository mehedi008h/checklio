import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/Fontisto";
import Animated, {
    FadeInDown,
    FadeOutDown,
    LinearTransition,
    ZoomIn,
    ZoomOut,
} from "react-native-reanimated";
import NoiseBackground from "@/components/common/NoiseBackground";
import CustomSafeareaView from "@/components/common/CustomSafeAreaView";

const SplashScreen = () => {
    return (
        <CustomSafeareaView backgroundColor="transparent">
            <NoiseBackground />
            <Animated.View
                entering={FadeInDown.duration(400).delay(150)}
                exiting={FadeOutDown.duration(400).delay(150)}
                layout={LinearTransition.duration(400)}
                className="flex-1 justify-center items-center"
            >
                <Icon name="twitch" size={70} color="white" />
                <Text className="text-4xl font-bold text-white mt-3 font-barlow_700 uppercase">
                    Checklio
                </Text>
            </Animated.View>
        </CustomSafeareaView>
    );
};

export default SplashScreen;
