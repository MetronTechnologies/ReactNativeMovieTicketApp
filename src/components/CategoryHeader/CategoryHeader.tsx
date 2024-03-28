import React from 'react';
import {Text} from "react-native";
import {CategoryHeaderStyles} from "./CategoryHeaderStyles.ts";

const CategoryHeader = ({title}: any) => {
    return (
        <Text style={CategoryHeaderStyles.text}>{title}</Text>
    );
};

export default CategoryHeader;