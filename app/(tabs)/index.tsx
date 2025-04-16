import React from "react";

import CustomSafeareaView from "@/components/common/CustomSafeAreaView";
import HomeHeader from "@/components/home/HomeHeader";
import RecentTasks from "@/components/home/RecentTasks";

const HomeScreen = () => {
    return (
        <CustomSafeareaView
            backgroundColor="transparent"
            barStyle="light-content"
        >
            <HomeHeader />
            <RecentTasks />
        </CustomSafeareaView>
    );
};

export default HomeScreen;
