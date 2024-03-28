import {StyleSheet} from "react-native";
import {COLORS, SPACING} from "../../theme/theme.ts";

export const SearchScreenStyles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: 'center',
        flex: 1,
        backgroundColor: COLORS.Black
    },
    inputContainer: {
        display: 'flex',
        marginHorizontal: SPACING.space_36,
        marginTop: SPACING.space_28,
        marginBottom: SPACING.space_28 - SPACING.space_12
    },
    centerContainer: {
        alignItems: 'center'
    }
});