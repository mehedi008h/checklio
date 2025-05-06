import React, { FC } from "react";
import { View, SafeAreaView } from "react-native";
import { StatusBar, StatusBarStyle } from "expo-status-bar";

interface CustomeSafeAreaViewProps {
    children: React.ReactNode;
    classStyle?: string;
    statusbarStyle?: string;
    barStyle: StatusBarStyle | undefined;
    backgroundColor?: string;
}

const CustomSafeareaView: FC<CustomeSafeAreaViewProps> = ({
    children,
    classStyle,
    barStyle = "dark",
    backgroundColor = "transparent",
}) => {
    const styleClass = `flex-1 bg-white ${classStyle}`;
    return (
        <SafeAreaView className={styleClass}>
            <StatusBar
                style={barStyle}
                translucent
                backgroundColor={"transparent"}
                hidden
            />
            <View className={styleClass}>{children}</View>
        </SafeAreaView>
    );
};

export default CustomSafeareaView;
