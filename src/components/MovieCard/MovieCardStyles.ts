import {StyleSheet} from "react-native";
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING} from "../../theme/theme.ts";

export const MovieCardStyles = StyleSheet.create({
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
        fontSize: FONTSIZE.size_24,
        textAlign: 'center',
        paddingVertical: SPACING.space_10
    },
    rateContainer: {
        flexDirection: 'row',
        gap: SPACING.space_10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SPACING.space_10
    },
    voteText: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_14,
        color: COLORS.White
    },
    genreContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: SPACING.space_20,
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    genreBox: {
        borderColor: COLORS.WhiteRGBA15,
        borderWidth: 1,
        paddingVertical: SPACING.space_4,
        paddingHorizontal: SPACING.space_10,
        borderRadius: BORDERRADIUS.radius_20
    },
    genreText: {
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_10,
        color: COLORS.WhiteRGBA75
    }
});