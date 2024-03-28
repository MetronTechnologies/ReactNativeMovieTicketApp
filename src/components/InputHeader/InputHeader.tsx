import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import CustomIcon from "../CustomIcon.ts";
import {COLORS, FONTSIZE} from "../../theme/theme.ts";
import {InputHeaderStyles} from "./InputHeaderStyles.ts";

const InputHeader = ({searchFunction}: any) => {
    const styles = InputHeaderStyles;
    const[searchParam, setSearchParam] = useState<string>('');
    return (
        <View style={styles.inputBox}>
            <TextInput
                style={styles.textInput}
                onChangeText={e => setSearchParam(e)}
                placeholder={'Search your movies'}
                placeholderTextColor={COLORS.WhiteRGBA32}
                value={searchParam}
            />
            <TouchableOpacity
                style={styles.searchIcon}
                onPress={
                    () => {
                        searchFunction(searchParam)
                        setSearchParam('');
                    }
                }
            >
                <CustomIcon name={'search'} color={COLORS.Orange} size={FONTSIZE.size_20}/>
            </TouchableOpacity>
        </View>
    );
};

export default InputHeader;