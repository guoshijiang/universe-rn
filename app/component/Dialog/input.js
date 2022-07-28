import React, {useState} from "react";
import {BaseDialog, DefaultHead} from "./base";
import {View, Text, Button, Colors,Keyboard} from "react-native-ui-lib";
import {StyleSheet} from "react-native";
import {Input} from "../Input";


const ContentComp = ({onChangeText, title, placeholder, onConfirm, onCancel}) => {

    let inputValue = '';
    const _onChangeText = text => {
        onChangeText && onChangeText(text);
        inputValue = text;
    }
    const _onConfirm = () => {
        Keyboard.dismiss();
        onConfirm && onConfirm(inputValue);
        onCancel();
    }

    return (
        <View flex bg-view1>
            <View flex centerV>
                <Text center marginB-20 font18b children={title}/>
                <Input validator={p => p > '222'}
                       placeholder={placeholder}
                       onChangeText={_onChangeText}
                       placeholderTextColor={Colors.text1}
                       style={styles.input}/>
            </View>
            <View height={1} bg-line1 margin-0/>
            <View row>
                <Button link flex label={t('button_close')} onPress={onCancel}/>
                <View width={1} height={50} bg-line1 margin-0/>
                <Button link flex label={t('button_confirm')} onPress={_onConfirm}/>
            </View>
        </View>
    );
}

export const InputDialog = ({   visible,
                                onDismiss,
                                onConfirm,
                                title,
                                placeholder,
                                onChangeText,
                            }) => {
    return <BaseDialog contentComp={<ContentComp title={title}
                                                 onCancel={onDismiss}
                                                 onConfirm={onConfirm}
                                                 placeholder={placeholder}
                                                 onChangeText={onChangeText}/>}
                       visible={visible}
                       position={'center'}
                       height={180}
                       onDismiss={onDismiss}
                       roundedDialog={{borderRadius: 15}}
                       width={'80%'}
    />
}

export const PasswordDialog = (args) => {
    return <InputDialog {...args}
                        title={t('password_verify_title')}
                        placeholder={t('password_verify_placeholder')}/>
}
export const NameDialog = (args) => {
    return <InputDialog {...args}
                        title={t('wallet_name_title')}
                        placeholder={t('wallet_name_placeholder')}/>
}


const styles = StyleSheet.create({
    input: {
        fontSize: 15,
        height: 45,
        color: Colors.text1,
        borderRadius: 22.5,
        backgroundColor: Colors.view2,
        marginHorizontal: 20,
        paddingHorizontal: 20,

    }
});

