import * as React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const TabStack = createBottomTabNavigator();

import routers from './routers';
import {tabOptions, screenOptions, defaultPageOptions} from "./options";

const Tab = () => (
    <TabStack.Navigator screenOptions={screenOptions} key={'tab_navigator'}>
        {routers.tabs.map(item => (
            <TabStack.Screen
                key={item.name}
                name={item.name}
                component={item.comp}
                options={tabOptions(item)}

            />
        ))}
    </TabStack.Navigator>
);

function App() {
    return (
        <Stack.Navigator key={'app_navigator'}>
            <Stack.Screen
                name={'Tab'}
                key={'tab'}
                component={Tab}
                options={defaultPageOptions}
            />
            {
                (routers.pages).map(item => (
                        <Stack.Screen
                            key={item.name}
                            name={item.name}
                            component={item.comp}
                            options={defaultPageOptions}/>
                    )
                )
            }
        </Stack.Navigator>
    );
}

export default App;
