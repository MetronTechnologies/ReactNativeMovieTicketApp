import {StyleSheet} from "react-native";
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE} from "../../theme/theme.ts";

export const CastsCardStyles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    cardImage: {
        aspectRatio: 1920/2880,
        borderRadius: BORDERRADIUS.radius_25 * 4
    },
    title: {
        alignSelf: 'stretch',
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_12,
        color: COLORS.White
    },
    subTitle: {
        alignSelf: 'stretch',
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_10,
        color: COLORS.White
    },
});