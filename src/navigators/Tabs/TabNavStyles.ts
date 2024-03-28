import {StyleSheet} from "react-native";
import {BORDERRADIUS, COLORS, SPACING} from "../../theme/theme.ts";

export const TabNavigatorStyles = StyleSheet.create({
    tabNavigator: {
        backgroundColor: COLORS.Black,
        borderTopWidth: 0,
        height: SPACING.space_10*10
    },
    activeTabBG: {
        backgroundColor: COLORS.Black,
        padding: SPACING.space_18,
        borderRadius: SPACING.space_18 * 2
    }
});