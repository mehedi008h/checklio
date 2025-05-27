import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { StatusBar, StatusBarStyle } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
    const insets = useSafeAreaInsets();
    return (
        <>
            <StatusBar
                translucent
                backgroundColor="transparent"
                style="light"
            />
            {/* View under the status bar */}
            <View
                style={[styles.statusBarBackground, { height: insets.top }]}
            />
            {/* Main content with padding */}
            <View style={[styles.container]}>
                {/* Your content here */}
                {children}
            </View>
        </>
    );
};

export default CustomSafeareaView;

const styles = StyleSheet.create({
    statusBarBackground: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "transparent",
    },
    container: {
        flex: 1,
    },
});
