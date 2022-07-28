import {Colors} from 'react-native-ui-lib';

const lightColors = {
    theme: '#FFFFFF',
    dialog: '#00000033',
    shadow1: '#111111',

    view1: Colors.white,
    view2: '#CCCCCC',

    text1: '#999999',
    text2: '#666666',

    button1:Colors.white,


    line1: '#999999',
}
const darkColors = {
    theme: '#FFFFFF',
}

export const setColors = mode => {
    if (mode === 'dark') {
        Colors.loadColors(darkColors);
    } else {
        Colors.loadColors(lightColors);
    }
}

setColors();

global.Colors = Colors;

// 00%=FF（不透明）
// 5%=F2
// 10%=E5
// 15%=D8
// 20%=CC
// 25%=BF
// 30%=B2
// 35%=A5
// 40%=99
// 45%=8c
// 50%=7F
// 55%=72
// 60%=66
// 65%=59
// 70%=4c
// 75%=3F
// 80%=33
// 85%=21
// 90%=19
// 95%=0c
// 100%=00（全透明）
