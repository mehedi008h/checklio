import React from "react";
import CustomSafeareaView from "@/components/common/CustomSafeAreaView";
import CreateTask from "@/components/tasks/CreateTask";
import Header from "@/components/common/Header";
import NoiseBackground from "@/components/common/NoiseBackground";

const AddTaskScreen = () => {
    return (
        <CustomSafeareaView
            backgroundColor="transparent"
            barStyle="light"
            classStyle="flex-1 bg-white"
        >
            <NoiseBackground />
            <Header
                title="Add Your Task"
                subtitle="Let's make your day more prodactive 😊"
                backButton
            />
            <CreateTask />
        </CustomSafeareaView>
    );
};

export default AddTaskScreen;
