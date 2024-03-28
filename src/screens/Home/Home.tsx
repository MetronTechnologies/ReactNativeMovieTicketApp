import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    Dimensions,
    FlatList,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {HomeScreenStyles} from "./HomeScreenStyles.ts";
import {COLORS, SPACING} from "../../theme/theme.ts";
import {getMoviesFromApi, getNowPlaying, getPopular, getUpComing} from "../../api/ApiCalls.ts";
import InputHeader from "../../components/InputHeader/InputHeader.tsx";
import CategoryHeader from "../../components/CategoryHeader/CategoryHeader.tsx";
import SubMovieCard from "../../components/SubMovieCard/SubMovieCard.tsx";
import {baseImgPath} from "../../api/Apis.ts";
import MovieCard from "../../components/MovieCard/MovieCard.tsx";
import Loader from "../../components/Loader/Loader.tsx";

const Home = ({navigation}: any) => {
    const styles = HomeScreenStyles;
    const [nowPlayingList, setNowPlayingList] = useState<any>(undefined);
    const [popularList, setPopularList] = useState<any>(undefined);
    const [upComingList, setUpComingList] = useState<any>(undefined);
    useEffect(
        () => {
            (
                async () => {
                    let tempNowPlaying = await getNowPlaying();
                    setNowPlayingList([{id: 'dummy1'}, ...tempNowPlaying.results, {id: 'dummy2'}]);
                    let tempUpComing = await getUpComing();
                    setUpComingList(tempUpComing.results);
                    let tempPopular = await getPopular();
                    setPopularList(tempPopular.results);
                }
            )
            ();
        }, []
    );

    const {width, height} = Dimensions.get('window');
    const searchMoviesFunction = (text: string) => {
      navigation.navigate('Search', {searchParam: text ? text : ''})
    }
    if(nowPlayingList === undefined || nowPlayingList === null || popularList === undefined || popularList === null || upComingList === undefined || upComingList === null){
        return (
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
                bounces={false}
                contentContainerStyle={styles.scrollView}
            >
                <StatusBar hidden/>
                <View style={styles.inputContainer}>
                    <InputHeader searchFunction={searchMoviesFunction}/>
                </View>
                <Loader loaderColor={COLORS.Orange} loaderSize={'Large'} />
            </ScrollView>
        )
    }
    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            bounces={false}
        >
            <StatusBar hidden/>
            <View style={styles.inputContainer}>
                <InputHeader searchFunction={searchMoviesFunction}/>
            </View>
            <CategoryHeader title={'Now Playing'} />
            <FlatList
                horizontal
                bounces={false}
                snapToInterval={width * 0.7 + SPACING.space_36}
                data={nowPlayingList}
                keyExtractor={
                    (item: any) => item.id
                }
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.containerGap}
                renderItem={
                    ({item, index}: any) => {
                        if(!item.original_title) {
                            return (
                                <View
                                    style={{
                                        width: (width-(width*0.7 + SPACING.space_36*2))/2
                                    }}
                                >
                                </View>
                            )
                        } else {
                            return (
                                <MovieCard
                                    title={item.title}
                                    imagePath={baseImgPath('w342', item.poster_path)}
                                    marginAtEnd={true}
                                    marginAround={false}
                                    cardFunction={
                                        () => {
                                            navigation.navigate(
                                                'Details', {
                                                    movieId: item.id
                                                }
                                            )
                                        }
                                    }
                                    cardWidth={width * 0.7}
                                    isLast={index === upComingList.length-1}
                                    isFirst={index === 0}
                                    genres={item.genre_ids}
                                    vote_average={item.vote_average}
                                    vote_count={item.vote_count}
                                />
                            )
                        }
                    }
                }
            />
            <CategoryHeader title={'Popular'} />
            <FlatList
                horizontal
                bounces={false}
                showsHorizontalScrollIndicator={false}
                data={popularList.reverse()}
                keyExtractor={
                    (item: any) => item.id
                }
                contentContainerStyle={styles.containerGap}
                renderItem={
                    ({item, index}: any) => (
                        <SubMovieCard
                            title={item.title}
                            imagePath={baseImgPath('w342', item.poster_path)}
                            marginAtEnd={true}
                            marginAround={false}
                            cardFunction={
                                () => {
                                    navigation.navigate(
                                        'Details', {
                                            movieId: item.id
                                        }
                                    )
                                }
                            }
                            cardWidth={width/3}
                            isLast={index === upComingList.length-1}
                            isFirst={index === 0}
                        />
                    )
                }
            />
            <CategoryHeader title={'Upcoming'} />
            <FlatList
                horizontal
                data={upComingList}
                keyExtractor={
                    (item: any) => item.id
                }
                contentContainerStyle={styles.containerGap}
                renderItem={
                    ({item, index}: any) => (
                        <SubMovieCard
                            title={item.title}
                            imagePath={baseImgPath('w342', item.poster_path)}
                            marginAtEnd={true}
                            marginAround={false}
                            cardFunction={
                                () => {
                                    navigation.navigate(
                                        'Details', {
                                            movieId: item.id
                                        }
                                    )
                                }
                            }
                            cardWidth={width/3}
                            isLast={index === upComingList.length-1}
                            isFirst={index === 0}
                        />
                    )
                }
            />
        </ScrollView>
    )
};

export default Home;