import React, { FC } from "react";
import { View, SafeAreaView, StatusBar } from "react-native";

interface CustomeSafeAreaViewProps {
    children: React.ReactNode;
    classStyle?: string;
    statusbarStyle?: string;
    barStyle?: "default" | "light-content" | "dark-content";
    backgroundColor?: string;
}

const CustomSafeareaView: FC<CustomeSafeAreaViewProps> = ({
    children,
    classStyle,
    barStyle = "light-content",
    backgroundColor = "#000000",
}) => {
    const styleClass = `flex-1 bg-white ${classStyle}`;
    return (
        <SafeAreaView className={styleClass}>
            <StatusBar
                barStyle={barStyle}
                translucent
                backgroundColor={backgroundColor}
            />
            <View className={styleClass}>{children}</View>
        </SafeAreaView>
    );
};

export default CustomSafeareaView;
