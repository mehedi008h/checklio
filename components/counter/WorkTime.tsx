import { ScrollView } from "react-native";
import React from "react";
import WorkTimeData from "./WorkTimeData";

const WorkTime = () => {
    return (
        <ScrollView className="p-4" showsVerticalScrollIndicator={false}>
            <WorkTimeData />
            <WorkTimeData />
            <WorkTimeData />
            <WorkTimeData />
            <WorkTimeData />
            <WorkTimeData />
            <WorkTimeData />
            <WorkTimeData />
            <WorkTimeData />
            <WorkTimeData />
        </ScrollView>
    );
};

export default WorkTime;
