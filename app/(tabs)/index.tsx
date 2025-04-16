import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import CustomSafeareaView from "@/components/common/CustomSafeAreaView";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Calendar from "@/components/common/Calendar";
import HomeHeader from "@/components/home/HomeHeader";
const HomeScreen = () => {
    return (
        <CustomSafeareaView
            backgroundColor="transparent"
            barStyle="light-content"
        >
            <HomeHeader />
        </CustomSafeareaView>
    );
};

export default HomeScreen;
