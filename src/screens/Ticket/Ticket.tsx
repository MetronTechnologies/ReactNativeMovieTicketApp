import React, {useEffect, useState} from 'react';
import {Image, ImageBackground, StatusBar, Text, View} from "react-native";
import {TicketScreenStyles} from "./TicketScreenStyles.ts";
import EncryptedStorage from "react-native-encrypted-storage";
import AppHeader from "../../components/AppHeader/AppHeader.tsx";
import {COLORS, FONTSIZE} from "../../theme/theme.ts";
import LinearGradient from "react-native-linear-gradient";
import CustomIcon from "../../components/CustomIcon.ts";

const Ticket = ({navigation, route}: any) => {
    const[ticketData, setTicketData] = useState<any>(route.params);
    useEffect(() => {
        (
            async () => {
                try {
                    const ticket = await EncryptedStorage.getItem('ticket');
                    if(ticket !== undefined && ticket !== null){
                        setTicketData(JSON.parse(ticket));
                    }
                } catch (e) {
                    console.error('Issuer while getting ticket', e)
                }
            }
        )()
    }, []);

    if(ticketData !== route.params && route.params !== undefined){
        setTicketData(route.params)
    }

    console.log(ticketData)

    const styles = TicketScreenStyles;
    if(ticketData === undefined || ticketData === null){
        return (
            <View style={styles.container}>
                <StatusBar hidden/>
                <View style={styles.appHeaderContainer}>
                    <AppHeader
                        color={COLORS.White}
                        size={FONTSIZE.size_24}
                        name={'close'}
                        header={'My Ticket'}
                        action={() => navigation.goBack()}
                    />
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <StatusBar hidden/>
            <View style={styles.appHeaderContainer}>
                <AppHeader
                    color={COLORS.White}
                    size={FONTSIZE.size_24}
                    name={'close'}
                    header={'My Ticket'}
                    action={() => navigation.goBack()}
                />
            </View>
            <View style={styles.ticketContainer}>
                <ImageBackground
                    source={{uri: ticketData?.ticketImg}}
                    style={styles.ticketBgImage}
                >
                    <LinearGradient
                        colors={[COLORS.OrangeRGBA0, COLORS.Orange]}
                        style={styles.linearGrad}
                    >
                        <View style={[styles.blackCircle, {position: 'absolute', bottom: -40, left: -40}]}>

                        </View>
                        <View style={[styles.blackCircle, {position: 'absolute', bottom: -40, right: -40}]}>

                        </View>
                    </LinearGradient>
                </ImageBackground>
                <View style={styles.linear}>

                </View>
                <View style={styles.ticketFooter}>
                    <View style={[styles.blackCircle, {position: 'absolute', top: -40, right: -40}]}>

                    </View>
                    <View style={[styles.blackCircle, {position: 'absolute', top: -40, left: -40}]}>

                    </View>
                    <View style={styles.ticketDateContainer}>
                        <View style={styles.subTitleContainer}>
                            <Text style={styles.dateTitle}>{ticketData?.date.date}</Text>
                            <Text style={styles.subTitle}>{ticketData?.date.day}</Text>
                        </View>
                        <View style={styles.subTitleContainer}>
                            <CustomIcon
                                name={'clock'}
                                color={COLORS.White}
                                size={FONTSIZE.size_24}
                                style={styles.clockIcon}
                            />
                            <Text style={styles.subTitle}>{ticketData?.time}</Text>
                        </View>
                    </View>
                    <View style={styles.ticketSeatContainer}>
                        <View style={styles.subTitleContainer}>
                            <Text style={styles.subHeading}>Hall</Text>
                            <Text style={styles.subTitle}>02</Text>
                        </View>
                        <View style={styles.subTitleContainer}>
                            <Text style={styles.subHeading}>Row</Text>
                            <Text style={styles.subTitle}>04</Text>
                        </View>
                        <View style={styles.subTitleContainer}>
                            <Text style={styles.subHeading}>Seats</Text>
                            <Text style={styles.subTitle}>
                                {
                                    ticketData?.seatArray.slice(0, 3).map(
                                        (item: any, index: any, arr: any) => {
                                            return item + (index == arr.length - 1 ? '' : ', ')
                                        }
                                    )
                                }
                            </Text>
                        </View>
                    </View>
                    <Image
                        source={require('../../assets/image/barcode.png')}
                        style={styles.barCodeImg}
                    />
                </View>
            </View>
        </View>
    );
};

export default Ticket;