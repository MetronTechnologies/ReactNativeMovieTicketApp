import React, {useEffect, useState} from 'react';
import {FlatList, Image, ImageBackground, ScrollView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import {DetailScreenStyles} from "./DetailScreenStyles.ts";
import {getMovieCasts, getMovieDetails} from "../../api/ApiCalls.ts";
import Loader from "../../components/Loader/Loader.tsx";
import {COLORS, FONTSIZE} from "../../theme/theme.ts";
import AppHeader from "../../components/AppHeader/AppHeader.tsx";
import {baseImgPath} from "../../api/Apis.ts";
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from "../../components/CustomIcon.ts";
import CategoryHeader from "../../components/CategoryHeader/CategoryHeader.tsx";
import CastsCard from "../../components/CastsCard/CastsCard.tsx";

const Details = ({navigation, route}: any) => {
    const styles = DetailScreenStyles;
    const[movieData, setMovieData] = useState(undefined);
    const[movieCasts, setMovieCasts] = useState<[]>([]);
    const fetchMovieDetails = async(id: number) => {
        let data = await getMovieDetails(id);
        setMovieData(data);
    }
    const fetchMovieCasts = async(id: number) => {
        let data = await getMovieCasts(id);
        // console.log(data?.cast)
        setMovieCasts(data);
    }
    useEffect(() => {
        (
            async() => {
                const tempMovieData = await getMovieDetails(route.params.movieId)
                setMovieData(tempMovieData);
                const tempMovieCasts = await getMovieCasts(route.params.movieId)
                let data: [] = tempMovieCasts?.cast;
                // console.log(data)
                setMovieCasts(data);
            }
        )
        ()
    }, []);
    // console.log("casts ---> ", movieCasts);
    // console.log("data ---> ", movieData);

    if(movieData === undefined || movieData === null || movieCasts === undefined || movieCasts === null || movieCasts.length === 0){
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
            showsVerticalScrollIndicator={false}
        >
            <StatusBar hidden/>
            <View>
                <ImageBackground
                    source={{uri: baseImgPath('w342', movieData?.backdrop_path)}}
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
                <View style={styles.imageBG}></View>
                <Image
                    source={{uri: baseImgPath('w342', movieData?.poster_path)}}
                    style={styles.cardImage}
                />
            </View>
            <View style={styles.timeContainer}>
                <CustomIcon
                    name={'clock'}
                    size={FONTSIZE.size_20}
                    color={COLORS.WhiteRGBA50}
                    style={styles.clockIcon}
                />
                <Text style={styles.runtimeText}>{Math.floor(movieData?.runtime / 60)}h{' '} {Math.floor(movieData?.runtime % 60)}m</Text>
            </View>
            <View>
                <Text style={styles.title}>{movieData?.original_title}</Text>
                <View style={styles.genreContainer}>
                    {
                        movieData?.genres.map(
                            (item: any) => (
                                <View style={styles.genreBox} key={item.id}>
                                    <Text style={styles.genreText}>{item.name}</Text>
                                </View>
                            )
                        )
                    }
                </View>
                <Text style={styles.tagline}>{movieData?.tagline}</Text>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.rateContainer}>
                    <CustomIcon name={'star'} color={COLORS.Yellow} size={FONTSIZE.size_20} />
                    <Text style={styles.runtimeText}>{movieData?.vote_average.toFixed()} ({movieData?.vote_count})</Text>
                    <Text style={styles.runtimeText}>
                        {movieData?.release_date.substring(8, 10)}{' '}
                        {new Date(movieData?.release_date).toLocaleString('default', {month: 'long'})}
                        {' '}{movieData?.release_date.substring(0, 4)}
                    </Text>
                </View>
                <Text style={styles.descText}>{movieData?.overview}</Text>
            </View>
            <View>
                <CategoryHeader title={'Top Cast'} />
                <FlatList
                    data={movieCasts}
                    keyExtractor={
                        (item: any) => item.id
                    }
                    horizontal
                    contentContainerStyle={styles.containerGap}
                    renderItem={
                        ({item, index}: any) => (
                            <CastsCard
                                imagePath={baseImgPath('w185', item.profile_path)}
                                title={item.original_name}
                                subTitle={item.character}
                                marginAtEnd={true}
                                cardWidth={80}
                                isFirst={index === 0}
                                isLast={index === movieCasts.length - 1}
                            />
                        )
                    }
                />
                <View>
                    <TouchableOpacity
                        style={styles.buttonBG}
                        onPress={
                            () => {
                                navigation.navigate('SeatBooking', {
                                    bgImage: baseImgPath('w780', movieData?.backdrop_path),
                                    posterImage : baseImgPath('w780', movieData?.poster_path)
                                })
                            }
                        }
                    >
                        <Text style={styles.buttonText}>Select seats</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default Details;