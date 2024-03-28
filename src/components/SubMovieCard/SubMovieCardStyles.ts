import {StyleSheet} from "react-native";
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING} from "../../theme/theme.ts";

export const SubMovieCardStyles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: COLORS.Black
    },
    cardImage: {
        aspectRatio: 2/3,
        borderRadius: BORDERRADIUS.radius_20
    },
    textTitle: {
        fontFamily: FONTFAMILY.poppins_regular,
        color: COLORS.White,
        fontSize: FONTSIZE.size_14,
        textAlign: 'center',
        paddingVertical: SPACING.space_10
    }
});