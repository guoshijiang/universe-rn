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
