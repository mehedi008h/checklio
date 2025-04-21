import React from "react";
import CustomSafeareaView from "@/components/common/CustomSafeAreaView";
import AddTaskHeader from "@/components/tasks/AddTaskHeader";
import CreateTask from "@/components/tasks/CreateTask";
import NoiseBackground from "@/components/common/NoiseBackground";
import { Image, View } from "react-native";

const AddTaskScreen = () => {
    return (
        <CustomSafeareaView
            backgroundColor="transparent"
            barStyle="light-content"
            classStyle="flex-1 bg-neutral-100"
        >
            <View className="absolute top-0 right-0 bottom-0 left-0">
                <Image
                    source={require("../../assets/images/todo_bg.png")}
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
