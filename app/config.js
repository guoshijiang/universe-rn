import {Platform, NativeModules, Dimensions, StatusBar} from 'react-native';
const {height, width} = Dimensions.get('window');
let stuHei = 20;
if (
  Platform.OS == 'ios' &&
  ((height == 812 && width == 375) || (height == 896 && width == 414))
) {
  stuHei = 44;
}
export const statusBarHei =
  Platform.OS === 'ios' ? stuHei : StatusBar.currentHeight;
export const headerHeight = 50;

// 持币存储key

export const WALLETKEY = '@mykey2';

// 币种列表
export const blist = [
  {
    name: '比特币',
    id: 'BTC',
  },
  {
    name: '以太坊',
    id: 'ETH',
  },
  {
    name: 'EOS',
    id: 'EOS',
  },
  {
    name: '泰达币',
    id: 'USDT',
  },
];

// 助记词
export const wordTexts = {
  txt: 'hurt blood jelly decorate blouse safe split town apple saddle similar speak',
  arr: [
    'hurt',
    'blood',
    'jelly',
    'decorate',
    'blouse',
    'safe',
    'split',
    'town',
    'apple',
    'saddle',
    'similar',
    'speak',
  ],
};
