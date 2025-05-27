import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";

interface CustomeDatePickerProps {
    dateLabel?: string;
    timeLabel?: string;
    dateRequired?: boolean;
    timeRequired?: boolean;
    name: string;
    value?: string | number;
    setCustomeValue: (id: string, value: string | number) => void;
    error?: boolean;
    errorMessage?: string;
}

const CustomeDatePicker = ({
    dateLabel,
    timeLabel,
    dateRequired,
    timeRequired,
    value,
    name,
    setCustomeValue,
    error,
    errorMessage,
}: CustomeDatePickerProps) => {
    const date = new Date();

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setCustomeValue(name, currentDate);
    };

    const showMode = (currentMode: "date" | "time") => {
        DateTimePickerAndroid.open({
            value: value ? new Date(value) : date,
            onChange,
            mode: currentMode,
            is24Hour: true,
        });
    };

    const showDatepicker = () => {
        showMode("date");
    };

    const showTimepicker = () => {
        showMode("time");
    };

    return (
        <View>
            <View className="flex-row justify-between items-center gap-2 mt-4">
                {/* date  */}
                <View className="flex-1 ">
                    {dateLabel && (
                        <View className="flex-row items-start gap-1">
                            <Text className="text-base font-okra_500 text-neutral-200 font-medium">
                                {dateLabel}
                            </Text>
                            {dateRequired && (
                                <Text className="text-red-500">*</Text>
                            )}
                        </View>
                    )}

                    <TouchableOpacity
                        onPress={showDatepicker}
                        className={`bg-transparent w-full flex-row justify-between items-center px-2 py-3 rounded-md border  text-neutral-600  font-okra_400 mt-1 ${
                            error ? "border-red-500" : "border-neutral-400"
                        }`}
                    >
                        <Text className="text-base font-okra_500 text-neutral-300 font-medium">
                            {value
                                ? new Date(value).toLocaleDateString()
                                : date.toLocaleDateString()}
                        </Text>

                        <Fontisto name="date" size={18} color="#d4d4d4" />
                    </TouchableOpacity>
                </View>

                {/* time  */}
                <View className="flex-1 ">
                    {timeLabel && (
                        <View className="flex-row items-start gap-1">
                            <Text className="text-base font-okra_500 text-neutral-200 font-medium">
                                {timeLabel}
                            </Text>
                            {timeRequired && (
                                <Text className="text-red-500">*</Text>
                            )}
                        </View>
                    )}
                    <TouchableOpacity
                        onPress={showTimepicker}
                        className={`bg-transparent w-full flex-row justify-between items-center px-2 py-3 rounded-md border  text-neutral-600  font-okra_400 mt-1 ${
                            error ? "border-red-500" : "border-neutral-400"
                        }`}
                    >
                        <Text className="text-base font-okra_500 text-neutral-300 font-medium">
                            {value
                                ? new Date(value).toLocaleTimeString()
                                : date.toLocaleTimeString()}
                        </Text>

                        <Entypo name="back-in-time" size={20} color="#d4d4d4" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* error message  */}
            {error && errorMessage && (
                <Text className="text-red-500 text-sm font-okra_400 mt-1">
                    {errorMessage}
                </Text>
            )}
        </View>
    );
};

export default CustomeDatePicker;
