import React from 'react';
import {Image, StatusBar, Text, View} from "react-native";
import {UserAccountScreenStyles} from "./UserAccountScreenStyles.ts";
import AppHeader from "../../components/AppHeader/AppHeader.tsx";
import {COLORS, FONTSIZE} from "../../theme/theme.ts";
import Settings from "../../components/Settings/Settings.tsx";

const UserAccount = ({navigation}: any) => {
    const styles = UserAccountScreenStyles;
    return (
        <View style={styles.container}>
            <StatusBar hidden/>
            <View style={styles.appHeaderContainer}>
                <AppHeader
                    color={COLORS.White}
                    size={FONTSIZE.size_24}
                    name={'close'}
                    header={'My Profile'}
                    action={() => navigation.goBack()}
                />
            </View>
            <View style={styles.profileContainer}>
                <Image
                    source={require('../../assets/image/avatar.png')}
                    style={styles.avatar}
                />
                <Text style={styles.profileText}>
                    John Prince
                </Text>
            </View>
            <View style={styles.profileContainer}>
                <Settings
                    icon={'user'}
                    heading={'Account'}
                    subHeading={'Edit profile'}
                    subTitle={'Change Password'}
                />
                <Settings
                    icon={'setting'}
                    heading={'Settings'}
                    subHeading={'Theme'}
                    subTitle={'Permissions'}
                />
                <Settings
                    icon={'dollar'}
                    heading={'Offers & Referrals'}
                    subHeading={'Offers'}
                    subTitle={'Referrals'}
                />
                <Settings
                    icon={'info'}
                    heading={'About'}
                    subHeading={'About Movies'}
                    subTitle={'more'}
                />
            </View>
        </View>
    );
};

export default UserAccount;