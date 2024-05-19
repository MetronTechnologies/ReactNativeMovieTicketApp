import {StyleSheet} from "react-native";
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from "../../theme/theme.ts";

export const SettingStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: SPACING.space_20
    },
    title: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_18,
        color: COLORS.White
    },
    subTitle: {
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_14,
        color: COLORS.WhiteRGBA15
    },
    iconBg: {
        justifyContent: 'center'
    },
    settingContainer: {
        flex: 1
    },
    iconStyle: {
        paddingHorizontal: SPACING.space_20
    }
});