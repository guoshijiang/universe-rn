import * as React from 'react';
import {Image} from "react-native";

export const pageOptions = () => ({})

export const defaultPageOptions = () => ({header: props => null})

export const screenOptions = {
    headerShown: false,//是否显示标题
    tabBarActiveTintColor: '#4C6EF5',
    // tabBarInactiveTintColor: '#EDEFF2',
    style: {
        fontSize: 12
    },
}

export const tabOptions = item => ({
    tabBarLabel: item.name,
    tabBarIcon: ({ focused, size }) => (
        <Image
            style={{
                width: size-3,
                height: size-3,
            }}
            source={focused ? item.activeSrc : item.src}
        />
    )
});
