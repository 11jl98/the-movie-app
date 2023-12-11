import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export function DetailSheet(props: any) {
  const snapPoints = useMemo(() => ["95%", "95%"], []);

  return (
    <BottomSheetModal
      ref={props.bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}
    >
      <View style={styles.contentContainer}>
        <View style={styles.containStars}>
          {Array.from(
            { length: Math.round(Number(props.movie?.vote_average)) },
            (_, index) => (
              <Icon key={index} name="star" size={28} color="#e8e900" />
            )
          )}
          <Text>{Math.round(Number(props.movie?.vote_average))}</Text>
        </View>
      </View>
    </BottomSheetModal>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  containStars: {
    width: "100%",
    flexDirection: "row",
    paddingTop: 8,
  },
});
