import * as React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const TabStack = createBottomTabNavigator();

import routers from './routers';
import {tabOptions, screenOptions, defaultPageOptions} from "./options";

const Tab = () => (
    <TabStack.Navigator screenOptions={screenOptions}>
        {routers.tabs.map(item => (
            <TabStack.Screen
                name={item.name}
                component={item.comp}
                options={tabOptions(item)}

            />
        ))}
    </TabStack.Navigator>
);

function App() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'Tab'}
                component={Tab}
                options={defaultPageOptions}
            />
            {
                (routers.pages).map(item => (
                        <Stack.Screen
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
