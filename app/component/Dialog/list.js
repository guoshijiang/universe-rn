import {BaseDialog} from "./base";
import React from "react";
import {Button, View} from "react-native-ui-lib";

const ITEM_HEIGHT = 55;
const ContentComp = ({list, onConfirm, onCancel}) => {

    const List = () => (list || []).map((value, index) => (
        <Button bg-button1 font20b text1
                style={{height:ITEM_HEIGHT,borderRadius:0}}
                label={value}
                key={value}
                onPress={() => onConfirm && onConfirm(value, index)}
        />
    ))

    return (
        <View flex useSafeArea backgroundColor={'red'} style={{backgroundColor:'red'}}>
            <List/>
            <Button marginV-5
                    style={{height:ITEM_HEIGHT,borderRadius:0}}
                    label={t('button_cancel')}
                    bg-button1
                    font20b
                    text1
                    onPress={() => onCancel && onCancel()}
            />
        </View>)
}

export const ListDialog = ({
                               list,
                               visible,
                               onDismiss,
                               onConfirm,
                           }) => {
    return <BaseDialog contentComp={<ContentComp list={list}
                                                 onCancel={onDismiss}
                                                 onConfirm={onConfirm}/>}
                       visible={visible}
                       height={list&&list.length*ITEM_HEIGHT + 10}
                       onDismiss={onDismiss}
                       roundedDialog={{borderRadius: 0}}
    />
}

export const WalletDialog = args => {
    const list = [t('创建'),t('导入')];
    return <ListDialog {...args} list={list}/>
}
