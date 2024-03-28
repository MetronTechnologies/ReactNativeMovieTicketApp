import React from 'react';
import {ActivityIndicator, View} from "react-native";
import {LoadingStyles} from "./LoaderStyles.ts";

const Loader = ({loaderColor, loaderSize}: any) => {
    return (
        <View style={LoadingStyles.loadingContainer}>
            <ActivityIndicator size={loaderSize} color={loaderColor}/>
        </View>
    );
};

export default Loader;