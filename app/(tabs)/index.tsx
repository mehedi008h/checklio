import React from "react";

import CustomSafeareaView from "@/components/common/CustomSafeAreaView";
import HomeHeader from "@/components/home/HomeHeader";
import RecentTasks from "@/components/home/RecentTasks";
import { Image, View } from "react-native";

const HomeScreen = () => {
    return (
        <CustomSafeareaView
            backgroundColor="transparent"
            barStyle="light"
            classStyle="flex-1 bg-neutral-100"
        >
            <View className="absolute top-0 right-0 bottom-0 left-0">
                <Image
                    source={require("../../assets/images/todo_bg.png")}
                    resizeMode="repeat"
                    className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
                />
            </View>
            <HomeHeader />
            <RecentTasks />
        </CustomSafeareaView>
    );
};

export default HomeScreen;
