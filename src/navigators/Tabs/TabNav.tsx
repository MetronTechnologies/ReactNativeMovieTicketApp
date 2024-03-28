import React, {useState} from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home/Home.tsx";
import Search from "../../screens/Search/Search.tsx";
import Ticket from "../../screens/Ticket/Ticket.tsx";
import UserAccount from "../../screens/UserAccount/UserAccount.tsx";
import {TabNavigatorStyles} from "./TabNavStyles.ts";
import {View} from "react-native";
import CustomIcon from "../../components/CustomIcon.ts";
import {COLORS, FONTSIZE} from "../../theme/theme.ts";

const tab = createBottomTabNavigator();

const TabNav = () => {
    const styles = TabNavigatorStyles;
    const[tabName, setTabName] = useState('Home');
    return (
        <tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle: styles.tabNavigator
            }}
        >
            <tab.Screen
                name={'Home'}
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: (
                        ({focused, color, size}) => {
                            return (
                                <View style={[styles.activeTabBG, focused && {backgroundColor: COLORS.Orange}]}>
                                    <CustomIcon
                                        name={'video'}
                                        color={COLORS.White}
                                        size={FONTSIZE.size_30}
                                    />
                                </View>
                            )
                        }
                    )
                }}
            />
            <tab.Screen
                name={'Search'}
                initialParams={['']}
                component={Search}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: (
                        ({focused, color, size}) => {
                            return (
                                <View style={[styles.activeTabBG, focused && {backgroundColor: COLORS.Orange}]}>
                                    <CustomIcon
                                        name={'search'}
                                        color={COLORS.White}
                                        size={FONTSIZE.size_30}
                                    />
                                </View>
                            )
                        }
                    )
                }}
            />
            <tab.Screen
                name={'Ticket'}
                component={Ticket}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: (
                        ({focused, color, size}) => {
                            return (
                                <View style={[styles.activeTabBG, focused && {backgroundColor: COLORS.Orange}]}>
                                    <CustomIcon
                                        name={'ticket'}
                                        color={COLORS.White}
                                        size={FONTSIZE.size_30}
                                    />
                                </View>
                            )
                        }
                    )
                }}
            />
            <tab.Screen
                name={'Account'}
                component={UserAccount}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: (
                        ({focused, color, size}) => {
                            return (
                                <View style={[styles.activeTabBG, focused && {backgroundColor: COLORS.Orange}]}>
                                    <CustomIcon
                                        name={'user'}
                                        color={COLORS.White}
                                        size={FONTSIZE.size_30}
                                    />
                                </View>
                            )
                        }
                    )
                }}
            />
        </tab.Navigator>
    );
};

export default TabNav;