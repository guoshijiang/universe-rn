import * as React from 'react';
import { Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from '../page/tab/home';
import MyTab from '../page/tab/my';
import NewsTab from '../page/tab/news';

const Stack = createNativeStackNavigator();
const TabStack = createBottomTabNavigator();

// HOME
import List from '../page/home/list';
import PutList from '../page/home/putList';
import WordInfo from '../page/home/wordInfo';
import CreatInfo from '../page/home/creatInfo';
import CreatWord from '../page/home/creatWord';
import BakupWord from '../page/home/bakupWord';
import ZzMain from '../page/home/zzMain';
import Zzform from '../page/home/zzform';
import ZzInfo from '../page/home/zzInfo';
import SkMain from '../page/home/skMain';

// MY
import Setting from '../page/my/setting';
import About from '../page/my/about';
import Help from '../page/my/help';
import AddressBook from '../page/my/addressBook';
import CreateAddress from '../page/my/createAddress';
import Record from '../page/my/record';
import Means from '../page/my/means';

//后续替换为字体图标
const tabs = [
  {name: '首页', comp: HomeTab, key: 'home', src: require('../assets/tabbar/home.png'), activeSrc: require('../assets/tabbar/home-active.png')},
  {name: '行情', comp: NewsTab, key: 'hq', src: require('../assets/tabbar/hq.png'), activeSrc: require('../assets/tabbar/hq-active.png')},
  {name: '发现', comp: NewsTab, key: 'fx', src: require('../assets/tabbar/fx.png'), activeSrc: require('../assets/tabbar/fx-active.png')},
  {name: '我的', comp: MyTab, key: 'my', src: require('../assets/tabbar/my.png'), activeSrc: require('../assets/tabbar/my-active.png')},
]

const Tab = () => (
  <TabStack.Navigator 
    screenOptions={
      {
        headerShown: false,//是否显示标题
        tabBarActiveTintColor: '#4C6EF5',
        // tabBarInactiveTintColor: '#EDEFF2',
        style: {
          fontSize: 12
        },
      }
    }
  >
    {/* <TabStack.Screen
      name="HomeTab"
      component={HomeTab}
      options={() => ({header: props => null})}
    />
    <TabStack.Screen
      name="NewsTab"
      component={NewsTab}
      options={() => ({header: props => null})}
    /> */}
    {tabs.map(item=> (
      <TabStack.Screen
        name={item.name}
        component={item.comp}
        options={
          {
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
          }
        }
      />
    ))}
  </TabStack.Navigator>
);

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        component={Tab}
        options={() => ({header: props => null})}
      />
      <Stack.Screen
        name="List"
        component={List}
        options={() => ({header: props => null})}
      />
      <Stack.Screen
        name="PutList"
        component={PutList}
        options={() => ({header: props => null})}
      />
      <Stack.Screen
        name="WordInfo"
        component={WordInfo}
        options={() => ({header: props => null})}
      />
      <Stack.Screen
        name="CreatInfo"
        component={CreatInfo}
        options={() => ({header: props => null})}
      />
      <Stack.Screen
        name="CreatWord"
        component={CreatWord}
        options={() => ({header: props => null})}
      />
      <Stack.Screen
        name="BakupWord"
        component={BakupWord}
        options={() => ({header: props => null})}
      />
      <Stack.Screen
        name="ZzMain"
        component={ZzMain}
        options={() => ({header: props => null})}
      />
      <Stack.Screen
        name="Zzform"
        component={Zzform}
        options={() => ({header: props => null})}
      />
      <Stack.Screen
        name="ZzInfo"
        component={ZzInfo}
        options={() => ({header: props => null})}
      />
      <Stack.Screen
        name="SkMain"
        component={SkMain}
        options={() => ({header: props => null})}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={() => ({header: props => null})}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={() => ({header: props => null})}
      />
      <Stack.Screen
        name="Help"
        component={Help}
        options={() => ({header: props => null})}
      />
      <Stack.Screen
        name="AddressBook"
        component={AddressBook}
        options={() => ({header: props => null})}
      />
      <Stack.Screen
        name="CreateAddress"
        component={CreateAddress}
        options={() => ({header: props => null})}
      />
      <Stack.Screen
        name="Record"
        component={Record}
        options={() => ({header: props => null})}
      />
      <Stack.Screen
        name="Means"
        component={Means}
        options={() => ({header: props => null})}
      />
    </Stack.Navigator>
  );
}

export default App;
