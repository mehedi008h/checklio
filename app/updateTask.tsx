import React from "react";
import CustomSafeareaView from "@/components/common/CustomSafeAreaView";
import CreateTask from "@/components/tasks/CreateTask";
import NoiseBackground from "@/components/common/NoiseBackground";
import Header from "@/components/common/Header";
import UpdateTask from "@/components/tasks/UpdateTask";

const UpdateTaskScreen = () => {
    return (
        <CustomSafeareaView
            backgroundColor="transparent"
            barStyle="light"
            classStyle="flex-1 bg-white"
        >
            <NoiseBackground />
            <Header
                title="Update Your Task"
                subtitle="Let's make your day more perfect 😊"
                backButton
            />
            <UpdateTask />
        </CustomSafeareaView>
    );
};

export default UpdateTaskScreen;
