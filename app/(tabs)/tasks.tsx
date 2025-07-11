import React from "react";
import TaskHeader from "@/components/tasks/TaskHeader";
import RecentTasks from "@/components/home/RecentTasks";
import CustomSafeareaView from "@/components/common/CustomSafeAreaView";
import NoiseBackground from "@/components/common/NoiseBackground";

const TasksScreen = () => {
    return (
        <CustomSafeareaView
            backgroundColor="transparent"
            barStyle="light"
            classStyle="flex-1 bg-neutral-100"
        >
            <NoiseBackground />
            <TaskHeader />
            <RecentTasks />
        </CustomSafeareaView>
    );
};

export default TasksScreen;
