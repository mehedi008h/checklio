import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import Animated, {
    FadeInDown,
    FadeOutDown,
    LinearTransition,
} from "react-native-reanimated";

interface InputProps {
    label: string;
}

const Input = ({ label }: InputProps) => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <View className="w-full mt-1 justify-end mb-5">
            {/* label */}
            {show && (
                <Animated.View
                    entering={FadeInDown.duration(400).delay(150)}
                    exiting={FadeOutDown.duration(400).delay(150)}
                    layout={LinearTransition.duration(400)}
                    className="absolute -top-4 left-2 z-50"
                >
                    <Text className="text-base font-okra_300 text-neutral-300 font-light">
                        {label}
                    </Text>
                </Animated.View>
            )}
            <TextInput
                className={`bg-transparent h-12 py-3 px-2 border-b-[1px]  border-neutral-300 rounded-md text-neutral-600  font-okra_400`}
                placeholder={label}
                placeholderTextColor="#d4d4d4"
                onFocus={() => setShow(true)}
            />
        </View>
    );
};

export default Input;
