import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from "react-native";
import React from "react";
import CustomSafeareaView from "@/components/common/CustomSafeAreaView";
import UserDetailsHeader from "@/components/user/UserDetailsHeader";
import Input from "@/components/common/Input";
import Animated, {
    FadeInDown,
    FadeOutDown,
    LinearTransition,
} from "react-native-reanimated";
import Icon from "@expo/vector-icons/Fontisto";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import NoiseBackground from "@/components/common/NoiseBackground";

const UserDetailsScreen = () => {
    const router = useRouter();
    return (
        <CustomSafeareaView backgroundColor="transparent" barStyle="light">
            <NoiseBackground />

            <Animated.View
                entering={FadeInDown.duration(400).delay(150)}
                exiting={FadeOutDown.duration(400).delay(150)}
                layout={LinearTransition.duration(400)}
                className="flex-1 justify-center items-center z-20"
            >
                <KeyboardAvoidingView className="w-full justify-center items-center">
                    <Icon name="twitch" size={70} color="white" />
                    {/* <Text className="text-4xl font-bold text-white mt-3 font-barlow_700 uppercase">
                    Checklio
                </Text> */}

                    <View className="w-full px-4 flex-col items-center justify-between gap-3 mt-10">
                        <Input label="First Name" />
                        <Input label="Last Name" />
                        <Input label="Email Address" />
                        <Input label="Work" />
                        <TouchableOpacity
                            onPress={() => router.push("/(tabs)")}
                            className="flex-1 w-full"
                        >
                            <LinearGradient
                                // Button Linear Gradient
                                colors={["#0f766e", "#115e59"]}
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
                </KeyboardAvoidingView>
            </Animated.View>
        </CustomSafeareaView>
    );
};

export default UserDetailsScreen;
