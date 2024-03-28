import {StyleSheet} from "react-native";
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from "../../theme/theme.ts";

export const CategoryHeaderStyles = StyleSheet.create({
    text: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_20,
        color: COLORS.White,
        paddingHorizontal: SPACING.space_36,
        paddingVertical: SPACING.space_28
    }
});