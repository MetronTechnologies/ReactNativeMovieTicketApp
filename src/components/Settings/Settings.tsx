import React from 'react';
import {Text, View} from "react-native";
import {SettingStyles} from "./SettingStyles.ts";
import CustomIcon from "../CustomIcon.ts";
import {COLORS, FONTSIZE} from "../../theme/theme.ts";

const Settings = ({icon, heading, subHeading, subTitle}: any) => {
    const styles = SettingStyles;
    return (
        <View style={styles.container}>
            <View style={styles.iconStyle}>
                <CustomIcon
                    name={icon}
                    color={COLORS.White}
                    size={FONTSIZE.size_24}
                />
            </View>
            <View style={styles.settingContainer}>
                <Text style={styles.title}>{heading}</Text>
                <Text style={styles.subTitle}>{subHeading}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
            <View style={styles.iconBg}>
                <CustomIcon
                    name={'arrow-right'}
                    color={COLORS.White}
                    size={FONTSIZE.size_24}
                    style={styles.iconStyle}
                />
            </View>
        </View>
    );
};

export default Settings;