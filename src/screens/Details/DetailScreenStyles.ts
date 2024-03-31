import {StyleSheet} from "react-native";
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING} from "../../theme/theme.ts";

export const DetailScreenStyles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: COLORS.Black
    },
    appHeaderContainer: {
        marginHorizontal: SPACING.space_36,
        marginTop: SPACING.space_20 * 2
    },
    imageBG: {
        width : '100%',
        aspectRatio: 3072/1727
    },
    linearGrad: {
        height: '100%'
    },
    cardImage: {
        width: '60%',
        aspectRatio: 200/300,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    clockIcon: {
        marginRight: SPACING.space_8
    },
    timeContainer: {
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
        paddingTop: SPACING.space_15
    },
    runtimeText: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_14,
        color: COLORS.White
    },
    title: {
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_24,
        color: COLORS.White,
        marginHorizontal: SPACING.space_36,
        marginVertical: SPACING.space_15,
        textAlign: 'center'
    },
    genreContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: SPACING.space_20,
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    genreBox: {
        borderColor: COLORS.WhiteRGBA50,
        borderWidth: 1,
        paddingVertical: SPACING.space_4,
        paddingHorizontal: SPACING.space_10,
        borderRadius: BORDERRADIUS.radius_25
    },
    genreText: {
        fontFamily: FONTFAMILY.poppins_regular,
        color: COLORS.WhiteRGBA75,
        fontSize: FONTSIZE.size_10
    },
    tagline: {
        fontFamily: FONTFAMILY.poppins_thin,
        color: COLORS.WhiteRGBA75,
        fontSize: FONTSIZE.size_14,
        fontStyle: 'italic',
        marginHorizontal: SPACING.space_36,
        marginVertical: SPACING.space_15,
        textAlign: 'center'
    },
    infoContainer: {
        marginHorizontal: SPACING.space_24,
    },
    rateContainer: {
        flexDirection: 'row',
        gap: SPACING.space_10,
        alignItems: 'center'
    },
    descText: {
        fontFamily: FONTFAMILY.poppins_light,
        color: COLORS.White,
        fontSize: FONTSIZE.size_14
    },
    containerGap: {
        gap: SPACING.space_24
    },
    buttonBG: {
        alignItems: 'center',
        marginVertical: SPACING.space_24
    },
    buttonText: {
        borderRadius: BORDERRADIUS.radius_25 * 2,
        paddingHorizontal: SPACING.space_24,
        paddingVertical: SPACING.space_10,
        backgroundColor: COLORS.Orange,
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_14,
        color: COLORS.White
    }
});