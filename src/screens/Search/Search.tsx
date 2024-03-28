import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, StatusBar, Text, View} from "react-native";
import {SearchScreenStyles} from "./SearchScreenStyles.ts";
import SubMovieCard from "../../components/SubMovieCard/SubMovieCard.tsx";
import {baseImgPath} from "../../api/Apis.ts";
import {searchMovieFunction} from "../../api/ApiCalls.ts";
import InputHeader from "../../components/InputHeader/InputHeader.tsx";
import {COLORS, SPACING} from "../../theme/theme.ts";
import Loader from "../../components/Loader/Loader.tsx";
import {useFocusEffect, useIsFocused} from "@react-navigation/native";

const Search = ({navigation, route}: any) => {
    const styles = SearchScreenStyles;
    const isFocused = useIsFocused();
    const {width, height} = Dimensions.get('screen');
    const [searchList, setSearchList] = useState([]);
    const [loading, setLoading] = useState(false);
    const searching = async (name: string) => {
        setLoading(true);
        setSearchList([]);
        let movies = await searchMovieFunction(name);
        setSearchList(movies.results);
        setLoading(p => !p);
        console.log("Search list  ---> ", searchList.length);
    }
    useEffect(() => {
        if (isFocused) {
            setLoading(true);
            if(route.params.searchParam === undefined){
                setLoading(p => !p);
                setSearchList([]);
                console.log("route params was undefined");
            } else if(route.params.searchParam === ''){
                setLoading(p => !p);
                setSearchList([]);
                console.log("route params was empty");
            } else if(route.params.searchParam === null){
                setLoading(p => !p);
                setSearchList([]);
                console.log("route params was null");
            } else {
                console.log("route params ---> ", route.params.searchParam);
                setSearchList([]);
                (
                    async () => {
                        console.log('Going to get movie with name ', route.params?.searchParam)
                        await searching(route.params?.searchParam);
                    }
                )
                ()
            }
        }
    }, [isFocused]);


    return (
        <View style={[styles.container, {width: width}]}>
            {
                loading ? (
                    <Loader loaderColor={COLORS.Orange} loaderSize={'Large'}/>
                ) : (
                    <>
                        <StatusBar hidden/>
                        <View>
                            <FlatList
                                data={searchList}
                                numColumns={2}
                                showsVerticalScrollIndicator={false}
                                keyExtractor={(item: any) => item.id}
                                ListHeaderComponent={
                                    <View style={styles.inputContainer}>
                                        <InputHeader searchFunction={searching}/>
                                    </View>
                                }
                                contentContainerStyle={styles.centerContainer}
                                renderItem={({item, index}: any) => (
                                    <SubMovieCard
                                        title={item.original_title}
                                        imagePath={baseImgPath('w342', item.poster_path)}
                                        marginAtEnd={false}
                                        marginAround={true}
                                        cardFunction={() => {
                                            navigation.navigate(
                                                'Details', {
                                                    movieId: item.id
                                                }
                                            );
                                        }}
                                        cardWidth={width / 2 - SPACING.space_12 * 2}
                                    />
                                )}
                            />
                        </View>
                    </>
                )
            }
        </View>
    );
};

export default Search;