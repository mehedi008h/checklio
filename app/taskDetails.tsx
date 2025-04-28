import { View, Image } from "react-native";
import React from "react";
import TaskDetailsHeader from "@/components/tasks/TaskDetailsHeader";
import CustomSafeareaView from "@/components/common/CustomSafeAreaView";
import TaskDetails from "@/components/tasks/TaskDetails";

const TaskDetailsScreen = () => {
    return (
        <CustomSafeareaView
            backgroundColor="transparent"
            barStyle="light-content"
        >
            <View className="absolute top-0 right-0 bottom-0 left-0">
                <Image
                    source={require("../assets/images/todo_bg.png")}
                    resizeMode="repeat"
                    className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
                />
            </View>
            <TaskDetailsHeader />
            <TaskDetails />
        </CustomSafeareaView>
    );
};

export default TaskDetailsScreen;
