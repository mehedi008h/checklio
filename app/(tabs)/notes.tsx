import React from "react";
import CustomSafeareaView from "@/components/common/CustomSafeAreaView";
import NoiseBackground from "@/components/common/NoiseBackground";
import NotesHeader from "@/components/notes/NotesHeader";
import Notes from "@/components/notes/Notes";

const NotesScreen = () => {
    return (
        <CustomSafeareaView
            backgroundColor="transparent"
            barStyle="light"
            classStyle="flex-1 bg-neutral-100"
        >
            <NoiseBackground />
            <NotesHeader />
            <Notes />
        </CustomSafeareaView>
    );
};

export default NotesScreen;
