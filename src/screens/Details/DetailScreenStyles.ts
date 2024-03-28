import {StyleSheet} from "react-native";
import {COLORS, SPACING} from "../../theme/theme.ts";

export const DetailScreenStyles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: COLORS.Black
    },
    appHeaderContainer: {
        marginHorizontal: SPACING.space_36,
        marginTop: SPACING.space_20 * 2
    }
});