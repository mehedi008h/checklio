import { View, FlatList } from "react-native";
import React from "react";
import Note from "./Note";

const Notes = () => {
    return (
        <View className="flex-1 px-3 pt-3">
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7]}
                numColumns={2}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => <Note />}
                columnWrapperStyle={{
                    justifyContent: "space-between",
                    marginBottom: 10,
                }}
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default Notes;
