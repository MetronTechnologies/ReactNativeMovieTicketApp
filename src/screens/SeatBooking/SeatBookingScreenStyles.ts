import {StyleSheet} from "react-native";
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING} from "../../theme/theme.ts";

export const SeatBookingScreenStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: COLORS.Black
    },
    imageBG: {
        width: '100%',
        aspectRatio: 3072/1727
    },
    linearGrad: {
        height: '100%'
    },
    appHeaderContainer: {
        marginHorizontal: SPACING.space_36,
        marginTop: SPACING.space_20 * 2
    },
    screenText: {
        textAlign: 'center',
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_10,
        color: COLORS.WhiteRGBA15
    },
    seatContainer: {
        marginVertical: SPACING.space_20,
    },
    containerGap: {
        gap: SPACING.space_20
    },
    containerGap24: {
        gap: SPACING.space_24
    },
    seatRow: {
        display: 'flex',
        flexDirection: 'row',
        gap: SPACING.space_20,
        justifyContent: 'center'
    },
    seatRadioContainer: {
        marginTop: SPACING.space_36,
        marginBottom: SPACING.space_10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    radioContainer: {
        flexDirection: 'row',
        gap: SPACING.space_10,
        alignItems: 'center'
    },
    radioText: {
        fontSize: FONTSIZE.size_12,
        fontFamily: FONTFAMILY.poppins_medium,
        color: COLORS.White
    },
    dateContainer: {
        width: SPACING.space_10 * 7,
        height: SPACING.space_10 * 10,
        borderRadius: SPACING.space_10 * 10,
        backgroundColor: COLORS.DarkGrey,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dateText: {
        fontFamily: FONTFAMILY.poppins_medium,
        color: COLORS.White,
        fontSize: FONTSIZE.size_24
    },
    dayText: {
        fontFamily: FONTFAMILY.poppins_regular,
        color: COLORS.White,
        fontSize: FONTSIZE.size_12
    },
    timeContainer: {
        paddingVertical: SPACING.space_10,
        borderWidth: 1,
        borderColor: COLORS.WhiteRGBA50,
        paddingHorizontal: SPACING.space_20,
        borderRadius: BORDERRADIUS.radius_25,
        backgroundColor: COLORS.DarkGrey,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timeText: {
        fontFamily: FONTFAMILY.poppins_regular,
        color: COLORS.White,
        fontSize: FONTSIZE.size_14
    },
    outerContainer: {
        marginVertical: SPACING.space_24
    },
    priceContainer: {
        alignItems: 'center'
    },
    priceButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SPACING.space_24,
        paddingBottom: SPACING.space_24
    },
    totalPriceText: {
        fontFamily: FONTFAMILY.poppins_regular,
        color: COLORS.Grey,
        fontSize: FONTSIZE.size_14
    },
    price: {
        fontFamily: FONTFAMILY.poppins_medium,
        color: COLORS.White,
        fontSize: FONTSIZE.size_14
    },
    buttonText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        color: COLORS.White,
        fontSize: FONTSIZE.size_16,
        backgroundColor: COLORS.Orange,
        borderRadius: BORDERRADIUS.radius_25,
        paddingHorizontal: SPACING.space_24,
        paddingVertical: SPACING.space_10,
    }
});