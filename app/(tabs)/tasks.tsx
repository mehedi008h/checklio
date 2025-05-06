import React from "react";
import TaskHeader from "@/components/tasks/TaskHeader";
import RecentTasks from "@/components/home/RecentTasks";
import CustomSafeareaView from "@/components/common/CustomSafeAreaView";
import { Image, View } from "react-native";

const TasksScreen = () => {
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
            <TaskHeader />
            <RecentTasks />
        </CustomSafeareaView>
    );
};

export default TasksScreen;
