import {StyleSheet} from "react-native";
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING} from "../../theme/theme.ts";

export const TicketScreenStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: COLORS.Black
    },
    appHeaderContainer: {
        marginHorizontal: SPACING.space_36,
        marginTop: SPACING.space_20 * 2
    },
    ticketContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    ticketBgImage: {
        alignSelf: 'center',
        width: 375,
        aspectRatio: 200/300,
        borderTopLeftRadius: BORDERRADIUS.radius_25,
        borderTopRightRadius: BORDERRADIUS.radius_25,
        overflow: 'hidden',
        justifyContent: 'flex-end'
    },
    linearGrad: {
        height: '70%'
    },
    linear: {
        borderTopColor: COLORS.Black,
        borderTopWidth: 3,
        width: 300,
        alignSelf: 'center',
        backgroundColor: COLORS.Orange,
        borderStyle: 'dashed'
    },
    ticketFooter: {
        backgroundColor: COLORS.Orange,
        width: 375,
        alignItems: 'center',
        paddingBottom: SPACING.space_36,
        alignSelf: 'center',
        borderBottomLeftRadius: BORDERRADIUS.radius_25,
        borderBottomRightRadius: BORDERRADIUS.radius_25,
    },
    ticketDateContainer: {
        flexDirection: 'row',
        gap: SPACING.space_36,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: SPACING.space_10
    },
    dateTitle: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_24,
        color: COLORS.White
    },
    subTitle: {
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_14,
        color: COLORS.White
    },
    ticketSeatContainer: {
        flexDirection: 'row',
        gap: SPACING.space_36,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: SPACING.space_10
    },
    subTitleContainer: {
        alignItems: 'center'
    },
    subHeading: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_18,
        color: COLORS.White
    },
    barCodeImg: {
        height: 50,
        aspectRatio: 158/52
    },
    clockIcon: {
        paddingBottom: SPACING.space_10
    },
    blackCircle: {
        height: 80,
        width: 80,
        borderRadius: 80,
        backgroundColor: COLORS.Black
    }
});