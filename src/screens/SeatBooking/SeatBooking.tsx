import React, {useState} from 'react';
import {
    FlatList,
    ImageBackground,
    ScrollView,
    StatusBar,
    Text,
    ToastAndroid,
    TouchableOpacity,
    View
} from "react-native";
import {SeatBookingScreenStyles} from "./SeatBookingScreenStyles.ts";
import LinearGradient from "react-native-linear-gradient";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {COLORS, FONTSIZE, SPACING} from "../../theme/theme.ts";
import AppHeader from "../../components/AppHeader/AppHeader.tsx";
import CustomIcon from "../../components/CustomIcon.ts";
import EncryptedStorage from "react-native-encrypted-storage";

const SeatBooking = ({navigation, route}: any) => {
    const timeArray: string[] = [
        '10:30',
        '12:30',
        '14:30',
        '15:00',
        '19:30',
        '21:00',
    ];
    const generateDate = (): { 'date': number, 'day': string }[] => {
      const date = new Date();
      let weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      let weekDays: { 'date': number, 'day': string }[] = [];
      for(let i=0; i<7; i++){
          let tempDate: { 'date': number, 'day': string } = {
              date: new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDate(),
              day: weekDay[new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDay()]
          };
          weekDays.push(tempDate);
      }
      return weekDays;
    }
    
    const generateSeats = (): {'number': number, 'taken': boolean, 'selected': boolean}[][]  => {
        let numberOfRows = 8;
        let numberOfColumns = 3;
        let rowArray: {'number': number, 'taken': boolean, 'selected': boolean}[][] = [];
        let start = 1;
        let maxSeats = false;
        for(let i=0; i<numberOfRows; i++){
            let columnArray: {'number': number, 'taken': boolean, 'selected': boolean}[]  = [];
            for(let j=0; j<numberOfColumns; j++){
                let seatObject = {
                    number: start,
                    taken: Boolean(Math.round(Math.random())),
                    selected: false
                };
                columnArray.push(seatObject);
                start++;
            }
            if(i === 3){
                numberOfColumns +=2;
            }
            if(numberOfColumns < 9 && !maxSeats){
                numberOfColumns += 2;
            } else {
                maxSeats = true;
                numberOfColumns -= 2;
            }
            rowArray.push(columnArray);
        }
        return rowArray;
    }

    const[dateArray, setDateArray] = useState<{ 'date': number, 'day': string }[]>(generateDate());
    const[selectedDateIndex, setSelectedDateIndex] = useState<any>();
    const[price, setPrice] = useState<number>(0);
    const[twoDSeatArray, setTwoDSeatArray] = useState<{'number': number, 'taken': boolean, 'selected': boolean}[][]>(generateSeats());
    const[selectedSeatArray, setSelectedSeatArray] = useState<[]>([]);
    const[selectedTimeIndex, setSelectedTimeIndex] = useState<any>();

    const selectSeat = (index: number, subIndex: number, number: number) => {
        if(!twoDSeatArray[index][subIndex].taken){
            let array: any = [...selectedSeatArray];
            let temp = [...twoDSeatArray];
            temp[index][subIndex].selected = !temp[index][subIndex].selected;
            if(!array.includes(number)){
                array.push(number);
                setSelectedSeatArray(array);
            } else {
                const tempIndex = array.indexOf(number);
                if(tempIndex > -1){
                    array.splice(tempIndex, 1);
                    setSelectedSeatArray(array);
                }
            }
            setPrice(array.length * 5);
            setTwoDSeatArray(temp);
        }
    }
    
    const bookSeats = async () => {
        if(selectedSeatArray.length !== 0 && timeArray[selectedTimeIndex] !== undefined && dateArray[selectedDateIndex] !== undefined){
            try {
                await EncryptedStorage.setItem(
                    'ticket',
                    JSON.stringify({
                        seatArray: selectedSeatArray,
                        time: timeArray[selectedTimeIndex],
                        date: dateArray[selectedDateIndex],
                        ticketImg: route.params.posterImage
                    })
                )
            } catch (error){
                console.error("Something went wrong while storing", error)
            }
            navigation.navigate(
                'Ticket', {
                    seatArray: selectedSeatArray,
                    time: timeArray[selectedTimeIndex],
                    date: dateArray[selectedDateIndex],
                    ticketImg: route.params.posterImage
                }
            )
        } else {
            ToastAndroid.showWithGravity(
                'Please select seats, date, and time to watch the show',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            )
        }
    }

    const styles = SeatBookingScreenStyles;
    return (
        <ScrollView
            style={styles.container}
            bounces={false}
            showsVerticalScrollIndicator={false}
        >
            <StatusBar hidden />
            <View>
                <ImageBackground
                    source={{uri: route.params?.bgImage}}
                    style={styles.imageBG}
                >
                    <LinearGradient
                        colors={[COLORS.BlackRGB10, COLORS.Black]}
                        style={styles.linearGrad}
                    >
                        <View style={styles.appHeaderContainer}>
                            <AppHeader
                                color={COLORS.White}
                                size={FONTSIZE.size_24}
                                name={'close'}
                                header={'Movie Details'}
                                action={() => navigation.goBack()}
                            />
                        </View>
                    </LinearGradient>
                </ImageBackground>
                <Text style={styles.screenText}>Screen this side</Text>
            </View>
            <View style={styles.seatContainer}>
                <View style={styles.containerGap}>
                    {
                        twoDSeatArray.map(
                            (item, index) => {
                                return <View key={index} style={styles.seatRow}>
                                    {
                                        item?.map(
                                            (subItem, subIndex) => (
                                                <TouchableOpacity
                                                    key={subItem.number}
                                                    onPress = {
                                                        () => {
                                                            selectSeat(index, subIndex, subItem.number)
                                                        }
                                                    }
                                                >
                                                    <CustomIcon
                                                        name={'seat'}
                                                        color={COLORS.White}
                                                        size={FONTSIZE.size_24}
                                                        style={[
                                                            styles.seatIcon,
                                                            subItem.taken && {color: COLORS.Grey},
                                                            subItem.selected && {color: COLORS.Orange}
                                                        ]}
                                                    />
                                                </TouchableOpacity>
                                            )
                                        )
                                    }
                                </View>
                            }
                        )
                    }
                </View>
                <View style={styles.seatRadioContainer}>
                    <View style={styles.radioContainer}>
                        <CustomIcon
                            name={'radio'}
                            size={FONTSIZE.size_20}
                            color={COLORS.White}
                        />
                        <Text style={styles.radioText}>Available</Text>
                    </View>
                    <View style={styles.radioContainer}>
                        <CustomIcon
                            name={'radio'}
                            size={FONTSIZE.size_20}
                            style={{color: COLORS.Grey}}
                        />
                        <Text style={styles.radioText}>Taken</Text>
                    </View>
                    <View style={styles.radioContainer}>
                        <CustomIcon
                            name={'radio'}
                            size={FONTSIZE.size_20}
                            color={COLORS.Orange}
                        />
                        <Text style={styles.radioText}>Selected</Text>
                    </View>
                </View>
            </View>
            <View>
                <FlatList
                    data={dateArray}
                    horizontal
                    contentContainerStyle={styles.containerGap24}
                    keyExtractor={
                        (item: {date: number, day: string}) => item.date.toString()
                    }
                    renderItem={
                        ({item, index}: any) => (
                            <TouchableOpacity
                                onPress={
                                    () => setSelectedDateIndex((index))
                                }
                            >
                                <View
                                    style={[
                                        styles.dateContainer,
                                        index === 0 ? {marginLeft: SPACING.space_24} : (
                                            index === dateArray.length - 1 && ({marginRight: SPACING.space_24})
                                        ),
                                        index === selectedDateIndex && ({backgroundColor: COLORS.Orange})
                                    ]}
                                >
                                    <Text style={styles.dateText}>{item.date}</Text>
                                    <Text style={styles.dayText}>{item.day}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                />
            </View>
            <View style={styles.outerContainer}>
                <FlatList
                    data={timeArray}
                    horizontal
                    contentContainerStyle={styles.containerGap24}
                    keyExtractor={
                        (item: string) => item
                    }
                    renderItem={
                        ({item, index}: any) => (
                            <TouchableOpacity
                                onPress={
                                    () => setSelectedTimeIndex(index)
                                }
                            >
                                <View
                                    style={[
                                        styles.timeContainer,
                                        index === 0 ? {marginLeft: SPACING.space_24} : (
                                            index === dateArray.length - 1 && ({marginRight: SPACING.space_24})
                                        ),
                                        index === selectedTimeIndex && ({backgroundColor: COLORS.Orange})
                                    ]}
                                >
                                    <Text style={styles.timeText}>{item}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                />
            </View>
            <View style={styles.priceButtonContainer}>
                <View style={styles.priceContainer}>
                    <Text style={styles.totalPriceText}> Total Price</Text>
                    <Text style={styles.price}>$ {price}.00</Text>
                </View>
                <TouchableOpacity
                    onPress={bookSeats}
                >
                    <Text style={styles.buttonText}>Buy Tickets</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default SeatBooking;