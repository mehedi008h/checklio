import { View, Text, Image } from "react-native";
import React from "react";
import TaskDetailsHeader from "@/components/tasks/TaskDetailsHeader";
import CustomSafeareaView from "@/components/common/CustomSafeAreaView";

const TaskDetails = () => {
    return (
        <CustomSafeareaView
            backgroundColor="transparent"
            barStyle="dark-content"
        >
            <TaskDetailsHeader />
        </CustomSafeareaView>
    );
};

export default TaskDetails;
