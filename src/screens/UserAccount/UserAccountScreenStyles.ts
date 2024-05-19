import {StyleSheet} from "react-native";
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from "../../theme/theme.ts";

export const UserAccountScreenStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: COLORS.Black
    },
    appHeaderContainer: {
        marginHorizontal: SPACING.space_36,
        marginTop: SPACING.space_20 * 2
    },
    profileContainer: {
        alignItems: 'center',
        padding: SPACING.space_36
    },
    profileText: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_16,
        marginTop: SPACING.space_16,
        color: COLORS.White
    },
    avatar: {
        height: 80,
        width: 80,
        borderRadius: 80
    }
});