import {StyleSheet} from "react-native";
import {COLORS, SPACING} from "../../theme/theme.ts";

export const HomeScreenStyles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Black,
        flex: 1
    },
    scrollView: {
        flex: 1
    },
    inputContainer: {
        marginHorizontal: SPACING.space_36,
        marginTop: SPACING.space_28
    },
    containerGap: {
        gap: SPACING.space_36
    }
});