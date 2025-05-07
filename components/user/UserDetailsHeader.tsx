import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";

const UserDetailsHeader = () => {
    return (
        <View className="h-full w-full">
            <Image
                source={require("../../assets/images/cover.jpg")}
                resizeMode="repeat"
                className="h-full w-full"
            />
            <BlurView
                tint="dark"
                intensity={50}
                className="h-full absolute top-0 bottom-0 left-0 right-0 px-4 pt-8 flex-row justify-end"
            >
                {/* right button */}
                <TouchableOpacity>
                    <BlurView
                        intensity={50}
                        tint="dark"
                        className="w-fit px-4 py-2 rounded-full justify-center items-center overflow-hidden "
                    >
                        <Text className="font-okra_500 text-base text-neutral-200">
                            Skip
                        </Text>
                    </BlurView>
                </TouchableOpacity>
            </BlurView>
        </View>
    );
};

export default UserDetailsHeader;
