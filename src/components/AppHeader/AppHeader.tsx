import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {AppHeaderStyles} from "./AppHeaderStyles.ts";
import CustomIcon from "../CustomIcon.ts";

const AppHeader = ({name, color, size, header, action}: any) => {
    const styles = AppHeaderStyles;
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconBG} onPress={() => action()}>
                <CustomIcon
                    name={name}
                    color={color}
                    size={size}
                />
            </TouchableOpacity>
            <Text style={styles.headerText}>{header}</Text>
            <View style={styles.empty}></View>
        </View>
    );
};

export default AppHeader;