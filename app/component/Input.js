import {TextInput} from "react-native";
import {Colors} from "react-native-ui-lib";
import React, {useCallback, useState} from "react";


export const Input = ({validator,onChangeText,value,...args}) => {

    const [inputValue,setInputValue] = useState('');
    let oldInputValue = '';
    useCallback(() => {
        setInputValue(value);
    },[value])

    const _onChangeText = text => {

        const v = validator && validator(text);
        setInputValue(v?text:oldInputValue);
        if (v) {
            oldInputValue = text;
            onChangeText&& onChangeText(text);
        }
    }

    return (
        <TextInput hideUnderline
                   value={inputValue}
                   autoCapitalize={'none'}
                   autoCorrect={false}
                   placeholderTextColor={Colors.text1}
                   onChangeText={_onChangeText}
                   {...args}
        />
    );
}
