import { View, Text, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import DateTimePicker, {
    DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";

interface CustomeDatePickerProps {
    dateLabel?: string;
    timeLabel?: string;
    dateRequired?: boolean;
    timeRequired?: boolean;
}

const CustomeDatePicker = ({
    dateLabel,
    timeLabel,
    dateRequired,
    timeRequired,
}: CustomeDatePickerProps) => {
    const [date, setDate] = useState(new Date());

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
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
        <View className="flex-row justify-between items-center gap-2 mt-4">
            {/* date  */}
            <View className="flex-1 ">
                {dateLabel && (
                    <View className="flex-row items-start gap-1">
                        <Text className="text-base font-okra_500 text-neutral-600 font-medium">
                            {dateLabel}
                        </Text>
                        {dateRequired && (
                            <Text className="text-red-500">*</Text>
                        )}
                    </View>
                )}

                <TouchableOpacity
                    onPress={showDatepicker}
                    className="bg-transparent w-full flex-row justify-between items-center px-2 py-3 rounded-md border border-neutral-500 text-neutral-600  font-okra_400 mt-1"
                >
                    <Text className="text-base font-okra_500 text-neutral-600 font-medium">
                        {date.toLocaleDateString()}
                    </Text>

                    <Fontisto name="date" size={18} color="#525252" />
                </TouchableOpacity>
            </View>

            {/* time  */}
            <View className="flex-1 ">
                {timeLabel && (
                    <View className="flex-row items-start gap-1">
                        <Text className="text-base font-okra_500 text-neutral-600 font-medium">
                            {timeLabel}
                        </Text>
                        {timeRequired && (
                            <Text className="text-red-500">*</Text>
                        )}
                    </View>
                )}
                <TouchableOpacity
                    onPress={showTimepicker}
                    className="bg-transparent w-full flex-row justify-between items-center px-2 py-3 rounded-md border border-neutral-500 text-neutral-600  font-okra_400 mt-1"
                >
                    <Text className="text-base font-okra_500 text-neutral-600 font-medium">
                        {date.toLocaleTimeString()}
                    </Text>

                    <Entypo name="back-in-time" size={20} color="#525252" />
                </TouchableOpacity>
            </View>
            {/* <Button onPress={showDatepicker} title="Show date picker!" />
            <Button onPress={showTimepicker} title="Show time picker!" /> */}
            {/* <Text>selected: {date.toLocaleString()}</Text> */}
        </View>
    );
};

export default CustomeDatePicker;
