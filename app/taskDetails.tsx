import { View, Image } from "react-native";
import React from "react";
import TaskDetailsHeader from "@/components/tasks/TaskDetailsHeader";
import CustomSafeareaView from "@/components/common/CustomSafeAreaView";
import TaskDetails from "@/components/tasks/TaskDetails";
import NoiseBackground from "@/components/common/NoiseBackground";

const TaskDetailsScreen = () => {
    return (
        <CustomSafeareaView backgroundColor="transparent" barStyle="light">
            <NoiseBackground />
            <TaskDetailsHeader />
            <TaskDetails />
        </CustomSafeareaView>
    );
};

export default TaskDetailsScreen;
