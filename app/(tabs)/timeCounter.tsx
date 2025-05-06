import { View, Text, Image } from "react-native";
import React from "react";
import CustomSafeareaView from "@/components/common/CustomSafeAreaView";
import TimeCounterHeader from "@/components/counter/TimeCounterHeader";

const TimeCounterScreen = () => {
    return (
        <CustomSafeareaView
            backgroundColor="transparent"
            barStyle="light-content"
            classStyle="flex-1 bg-neutral-100"
        >
            <View className="absolute top-0 right-0 bottom-0 left-0">
                <Image
                    source={require("../../assets/images/todo_bg.png")}
                    resizeMode="repeat"
                    className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
                />
            </View>
            <TimeCounterHeader />
        </CustomSafeareaView>
    );
};

export default TimeCounterScreen;
