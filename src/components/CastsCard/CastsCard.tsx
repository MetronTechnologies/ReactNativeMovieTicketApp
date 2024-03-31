import React from 'react';
import {Image, Text, View} from "react-native";
import {CastsCardStyles} from "./CastsCardStyles.ts";
import {SPACING} from "../../theme/theme.ts";

const CastsCard = ({imagePath, title, subTitle, marginAtEnd, cardWidth, isFirst, isLast}: any) => {
    const styles = CastsCardStyles;
    return (
        <View
            style={[
                styles.container,
                marginAtEnd ? (
                    isFirst ? ({marginLeft: SPACING.space_24}) : (
                        isLast ? ({marginRight: SPACING.space_24}) : ({})
                    )
                ) : ({}),
                {maxWidth: cardWidth}
            ]}
        >
            <Image
                source={{uri: imagePath}}
                style={[styles.cardImage, {width: cardWidth}]}
            />
            <Text numberOfLines={1} style={styles.title}>{title}</Text>
            <Text numberOfLines={1} style={styles.subTitle}>{subTitle}</Text>
        </View>
    );
};

export default CastsCard;