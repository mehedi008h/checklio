import { View, Text, Image } from "react-native";
import React from "react";
import CustomSafeareaView from "@/components/common/CustomSafeAreaView";
import AddTaskHeader from "@/components/tasks/AddTaskHeader";
import CreateTask from "@/components/tasks/CreateTask";

const AddTaskScreen = () => {
    return (
        <CustomSafeareaView
            backgroundColor="transparent"
            barStyle="light-content"
            classStyle="flex-1 bg-white"
        >
            <View className="absolute top-0 right-0 bottom-0 left-0">
                <Image
                    source={require("../assets/images/todo_bg.png")}
                    resizeMode="repeat"
                    className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
                />
            </View>
            <AddTaskHeader />
            <CreateTask />
        </CustomSafeareaView>
    );
};

export default AddTaskScreen;
