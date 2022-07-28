import {Typography, Shadows, Colors} from 'react-native-ui-lib';

const fontMap = {
    font10: {fontSize: 10},
    font10b: {fontSize: 10, fontWeight: 'bold'},
    font12: {fontSize: 12},
    font12b: {fontSize: 12, fontWeight: 'bold'},
    font14: {fontSize: 14},
    font14b: {fontSize: 14, fontWeight: 'bold'},
    font16: {fontSize: 16},
    font16b: {fontSize: 16, fontWeight: 'bold'},
    font18: {fontSize: 18},
    font18b: {fontSize: 18, fontWeight: 'bold'},
    font20: {fontSize: 20},
    font20b: {fontSize: 20, fontWeight: 'bold'},
    font25: {fontSize: 25},
    font25b: {fontSize: 25, fontWeight: 'bold'},
    font30: {fontSize: 30},
    font30b: {fontSize: 30, fontWeight: 'bold'},
    font35: {fontSize: 35},
    font35b: {fontSize: 35, fontWeight: 'bold'},
    font40: {fontSize: 40},
    font40b: {fontSize: 40, fontWeight: 'bold'},

};

Typography.loadTypographies(fontMap);


const shadowsStyle = () => {
    return (
        {
            main: {
                shadowColor: Colors.shadow1,
                shadowOpacity: 0.6,
                shadowRadius: 6,
                shadowOffset: {
                    height: 1,
                    width: 0
                },
                elevation: 2
            }
        }
    );
}

export const reloadShadows =() => {
    Shadows.loadShadows(shadowsStyle());
}

reloadShadows();
