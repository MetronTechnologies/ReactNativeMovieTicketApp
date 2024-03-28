import React from 'react';
import {View, Text, TouchableOpacity, Image} from "react-native";
import {COLORS, FONTSIZE, SPACING} from "../../theme/theme.ts";
import {MovieCardStyles} from "./MovieCardStyles.ts";
import CustomIcon from "../CustomIcon.ts";

const movieGenres: any = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    104: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Sci-Fi',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western'
}

const MovieCard = ({title, imagePath, marginAtEnd, cardFunction, cardWidth, isLast, isFirst, marginAround, vote_average, vote_count, genres}: any) => {
    const styles = MovieCardStyles;
    return (
        <TouchableOpacity
            onPress={
                () => {
                    cardFunction()
                }
            }
        >
            <View
                style={[
                    styles.container,
                    marginAround && {margin: SPACING.space_12},
                    marginAtEnd ? (
                        isFirst ? ({marginLeft: SPACING.space_36}) : (
                            isLast ? ({marginRight: SPACING.space_36}) : ({})
                        )
                    ) : ({}),
                    {maxWidth: cardWidth}
                ]}
            >
                <Image
                    style={[styles.cardImage, {width: cardWidth}]}
                    source={{uri: imagePath}}
                />
                <View>
                    <View style={styles.rateContainer}>
                        <CustomIcon
                            name={'star'}
                            size={FONTSIZE.size_20}
                            color={COLORS.Yellow}
                        />
                        <Text style={styles.voteText}>
                            {vote_average} ({vote_count})
                        </Text>
                    </View>
                    <Text numberOfLines={1} style={styles.textTitle}>
                        {title}
                    </Text>
                    <View style={styles.genreContainer}>
                        {
                            genres.map(
                                (item: any) => (
                                    <View style={styles.genreBox} key={item}>
                                        <Text style={styles.genreText}>{movieGenres[item]}</Text>
                                    </View>
                                )
                            )
                        }
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    );
};

export default MovieCard;