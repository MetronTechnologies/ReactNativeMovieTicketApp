import React from 'react';
import {View, Text, TouchableOpacity, Image} from "react-native";
import {SubMovieCardStyles} from "./SubMovieCardStyles.ts";
import {SPACING} from "../../theme/theme.ts";

const SubMovieCard = ({title, imagePath, marginAtEnd, cardFunction, cardWidth, isLast, isFirst, marginAround}: any) => {
    const styles = SubMovieCardStyles;
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
                <Text numberOfLines={1} style={styles.textTitle}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default SubMovieCard;