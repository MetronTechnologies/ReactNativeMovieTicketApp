import React, {useEffect, useState} from 'react';
import {ImageBackground, ScrollView, StatusBar, Text, View} from "react-native";
import {DetailScreenStyles} from "./DetailScreenStyles.ts";
import {getMovieCasts, getMovieDetails} from "../../api/ApiCalls.ts";
import Loader from "../../components/Loader/Loader.tsx";
import {COLORS, FONTSIZE} from "../../theme/theme.ts";
import AppHeader from "../../components/AppHeader/AppHeader.tsx";
import {baseImgPath} from "../../api/Apis.ts";

const Details = ({navigation, route}: any) => {
    const styles = DetailScreenStyles;
    const[movieData, setMovieData] = useState(undefined);
    const[movieCasts, setMovieCasts] = useState(undefined);
    const fetchMovieDetails = async(id: number) => {
        let data = await getMovieDetails(id);
        setMovieData(data);
    }
    const fetchMovieCasts = async(id: number) => {
        let data = await getMovieCasts(id);
        setMovieCasts(data);
    }
    useEffect(() => {
        (
            async() => {
                const tempMovieData = await getMovieDetails(route.params.movieId)
                setMovieData(tempMovieData);
                const tempMovieCasts = await getMovieCasts(route.params.movieId)
                setMovieCasts(tempMovieCasts);
            }
        )
        ()
    }, []);
    // console.log("casts ---> ", movieCasts);
    // console.log("data ---> ", movieData);

    if(movieData === undefined || movieData === null || movieCasts === undefined || movieCasts === null){
        return (
            <ScrollView
                style={styles.container}
                bounces={false}
                // contentContainerStyle={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <AppHeader
                        color={COLORS.White}
                        size={FONTSIZE.size_24}
                        name={'close'}
                        header={'Movie Details'}
                        action={() => navigation.goBack()}
                    />
                </View>
                <Loader loaderColor={COLORS.Orange} loaderSize={'Large'}/>
            </ScrollView>
        );
    }
    return (
        <ScrollView
            style={styles.container}
            bounces={false}
            // contentContainerStyle={styles.scrollView}
            showsVerticalScrollIndicator={false}
        >
            {/*<View style={styles.appHeaderContainer}>*/}
            {/*    <AppHeader*/}
            {/*        color={COLORS.White}*/}
            {/*        size={FONTSIZE.size_24}*/}
            {/*        name={'close'}*/}
            {/*        header={'Movie Details'}*/}
            {/*        action={() => navigation.goBack()}*/}
            {/*    />*/}
            {/*</View>*/}
            <StatusBar hidden/>
            <View>
                <ImageBackground
                    source={{uri: baseImgPath('w342', movieData.backdrop_path)}}
                />
            </View>
        </ScrollView>
    );
};

export default Details;