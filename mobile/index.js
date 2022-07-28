import React, {Component, useEffect, useReducer, useState} from "react";
import {AppState} from 'react-native';
import Route from "../app/route";
import Toast from "react-native-toast-message";
import {NavigationContainer} from "@react-navigation/native";
import {connect, useSelector} from "react-redux";
import {getTodoSelector, todoSelector} from "../app/selectors/todo";
import * as actions from '../app/actions/todo'
import {intlInit} from "../app/resources/locales";
import {Loading} from "../app/component/Loading";

function Mobile() {
    const [appState,setAppState] = useState(null);
    useEffect( () => {
        AppState.addEventListener('change', appStateChange);
         intlInit('zh-CN').catch(console.log);
    },[])
    const todo = useSelector(state => todoSelector(state));

    const appStateChange = nextAppState => {
        if (appState.match(/background/) && nextAppState === 'active') {     /** 从后台进入前台 */
        } else if (appState.match(/active/) && nextAppState === 'background') {       /** 从前台进入后台 */
        }
        setAppState(nextAppState);
    };

    let lastBackPressed;
    const onBackAndroid = () => {
        if (lastBackPressed && lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内连击back键，可以退出应用。
            return false;
        }
        lastBackPressed = Date.now();
        return true;
    };

    return (
        <NavigationContainer>
            <Route />
            <Toast position="bottom" bottomOffset={40} />
            <Loading.UI />
        </NavigationContainer>
    );
}

export default Mobile;


// @connect(state => ({
//     todo0: state.todo,
//     todo1: todoSelector(state),
//     todo2: getTodoSelector(state),
// }), dispatch => ({dispatch}))
// export default class Mobile extends Component{
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             currentAppState: AppState.currentState,
//         };
//     }
//
//     componentDidMount() {
//         /*监控App生命周期*/
//         AppState.addEventListener('change', this.handleAppStateChange);
//         this.props.dispatch(actions.plus());
//     }
//     /*** 原声状态处理**/
//     handleAppStateChange = nextAppState => {
//         if (this.state.currentAppState.match(/background/) && nextAppState === 'active') {
//             /** 从后台进入前台 */
//         } else if (this.state.currentAppState.match(/active/) && nextAppState === 'background') {
//             /** 从前台进入后台 */
//         }
//         this.setState({currentAppState: nextAppState});
//     };
//     /**
//      * 安卓物理返回键处理
//      * */
//     onBackAndroid = () => {
//         if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
//             //最近2秒内按过back键，可以退出应用。
//             return false;
//         }
//         this.lastBackPressed = Date.now();
//         return true;
//     };
//
//     render() {
//         //todo this is todo test ~
//         console.info('todo 0:',this.props.todo0);
//         console.info('todo 1:',this.props.todo1);
//         console.info('todo 2:',this.props.todo2);
//         return (
//             <NavigationContainer>
//                 <Route />
//                 <Toast position="bottom" bottomOffset={40} />
//             </NavigationContainer>
//         );
//     }
//
// }
