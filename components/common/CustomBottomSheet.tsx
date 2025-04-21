import { View, StyleSheet } from "react-native";
import React, { forwardRef, useCallback, useMemo } from "react";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
export type Ref = BottomSheet;

interface Props {
    children: React.ReactNode;
    snap?: string;
}

const CustomBottomSheet = forwardRef<Ref, Props>((props, ref) => {
    const snapPoints = useMemo(
        () => [props.snap ? props.snap : "30%"],
        [props.snap]
    );
    0;
    const renderBackdrop = useCallback(
        (props: any) => (
            <BottomSheetBackdrop
                appearsOnIndex={0}
                disappearsOnIndex={-1}
                {...props}
            />
        ),
        []
    );

    return (
        <BottomSheet
            ref={ref}
            index={0}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            handleIndicatorStyle={{ backgroundColor: "#000" }}
            backdropComponent={renderBackdrop}
        >
            <View style={styles.contentContainer}>{props.children}</View>
        </BottomSheet>
    );
});

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        padding: 10,
    },
});

export default CustomBottomSheet;
