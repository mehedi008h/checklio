import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    TouchableWithoutFeedback,
} from "react-native";
import React, { useRef, useState } from "react";
import moment from "moment";
import Swiper from "react-native-swiper";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { BlurView } from "expo-blur";

const { width } = Dimensions.get("window");

const Calendar = () => {
    const swiper = useRef();
    const contentSwiper = useRef();
    const [week, setWeek] = useState(0);
    const [value, setValue] = useState(new Date());
    /**
     * Create an array of weekdays for previous, current, and next weeks.
     */
    const weeks = React.useMemo(() => {
        const start = moment().add(week, "weeks").startOf("week");
        return [-1, 0, 1].map((adj) => {
            return Array.from({ length: 7 }).map((_, index) => {
                const date = moment(start).add(adj, "week").add(index, "day");
                return {
                    weekday: date.format("ddd"),
                    date: date.toDate(),
                };
            });
        });
    }, [week]);
    /**
     * Create an array of days for yesterday, today, and tomorrow.
     */
    const days = React.useMemo(() => {
        return [
            moment(value).subtract(1, "day").toDate(),
            value,
            moment(value).add(1, "day").toDate(),
        ];
    }, [value]);
    return (
        <View className="h-24 w-full">
            <View style={styles.picker}>
                <Swiper
                    index={1}
                    ref={swiper}
                    loop={false}
                    showsPagination={false}
                    onIndexChanged={(ind) => {
                        if (ind === 1) {
                            return;
                        }
                        const index = ind - 1;
                        setValue(moment(value).add(index, "week").toDate());
                        setTimeout(() => {
                            setWeek(week + index);
                            swiper.current.scrollTo(1, false);
                        }, 10);
                    }}
                >
                    {weeks.map((dates, index) => (
                        <View style={styles.itemRow} key={index}>
                            {dates.map((item, dateIndex) => {
                                const isActive =
                                    value.toDateString() ===
                                    item.date.toDateString();
                                return (
                                    <TouchableWithoutFeedback
                                        key={dateIndex}
                                        onPress={() => setValue(item.date)}
                                    >
                                        <BlurView
                                            className="overflow-hidden"
                                            intensity={20}
                                            style={[
                                                styles.item,
                                                isActive && {
                                                    backgroundColor: "#999",
                                                    borderColor: "#999",
                                                },
                                            ]}
                                        >
                                            <Text
                                                style={[
                                                    styles.itemWeekday,
                                                    isActive && {
                                                        color: "#000",
                                                    },
                                                ]}
                                            >
                                                {item.weekday}
                                            </Text>
                                            <Text
                                                style={[
                                                    styles.itemDate,
                                                    isActive && {
                                                        color: "#000",
                                                    },
                                                ]}
                                            >
                                                {item.date.getDate()}
                                            </Text>
                                        </BlurView>
                                    </TouchableWithoutFeedback>
                                );
                            })}
                        </View>
                    ))}
                </Swiper>
            </View>
        </View>
    );
};

export default Calendar;

const styles = StyleSheet.create({
    picker: {
        flex: 1,
        maxHeight: 74,
        flexDirection: "row",
        alignItems: "center",
    },

    /** Item */
    item: {
        flex: 1,
        height: 65,
        marginHorizontal: 4,
        paddingVertical: 6,
        paddingHorizontal: 4,
        borderRadius: 15,
        flexDirection: "column",
        alignItems: "center",
    },
    itemRow: {
        width: width,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingHorizontal: 12,
    },
    itemWeekday: {
        fontSize: 13,
        fontWeight: "500",
        color: "#999",
        marginBottom: 4,
    },
    itemDate: {
        fontSize: 15,
        fontWeight: "600",
        color: "#999",
    },
    /** Placeholder */
    placeholder: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        height: 400,
        marginTop: 0,
        padding: 0,
        backgroundColor: "transparent",
    },
    placeholderInset: {
        borderWidth: 4,
        borderColor: "#e5e7eb",
        borderStyle: "dashed",
        borderRadius: 9,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
});
