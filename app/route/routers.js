import * as React from 'react';
//MAIN
import HomeTab from '../page/tab/home';
import MyTab from '../page/tab/my';
import NewsTab from '../page/tab/news';
import DAppTab from '../page/tab/dapp';


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

export const tabs = [
    {name: '首页', comp: HomeTab, key: 'home', src: require('../assets/tabbar/home.png'), activeSrc: require('../assets/tabbar/home-active.png')},
    {name: '行情', comp: NewsTab, key: 'hq', src: require('../assets/tabbar/hq.png'), activeSrc: require('../assets/tabbar/hq-active.png')},
    {name: '发现', comp: DAppTab, key: 'fx', src: require('../assets/tabbar/fx.png'), activeSrc: require('../assets/tabbar/fx-active.png')},
    {name: '我的', comp: MyTab, key: 'my', src: require('../assets/tabbar/my.png'), activeSrc: require('../assets/tabbar/my-active.png')},
]

const r = (name,comp,options) => {
    return {name,comp,options};
}

const homePages = [
    r('List',List),
    r('PutList',PutList),
    r('WordInfo',WordInfo),
    r('CreatInfo',CreatInfo),
    r('CreatWord',CreatWord),
    r('BakupWord',BakupWord),
    r('ZzMain',ZzMain),
    r('Zzform',Zzform),
    r('ZzInfo',ZzInfo),
    r('SkMain',SkMain),
];
const myPages = [
    r('Setting',Setting),
    r('About',About),
    r('Help',Help),
    r('AddressBook',AddressBook),
    r('CreateAddress',CreateAddress),
    r('Record',Record),
    r('Means',Means),

];



export default {
    pages: [...homePages,...myPages],
    tabs,
}
