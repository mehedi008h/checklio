import { View, Image } from "react-native";
import React from "react";
import CustomSafeareaView from "@/components/common/CustomSafeAreaView";
import AddTaskHeader from "@/components/tasks/AddTaskHeader";
import CreateTask from "@/components/tasks/CreateTask";
import NoiseBackground from "@/components/common/NoiseBackground";

const UpdateTaskScreen = () => {
    return (
        <CustomSafeareaView
            backgroundColor="transparent"
            barStyle="light"
            classStyle="flex-1 bg-white"
        >
            <NoiseBackground />
            <AddTaskHeader />
            <CreateTask />
        </CustomSafeareaView>
    );
};

export default UpdateTaskScreen;
