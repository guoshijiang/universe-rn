import {Modal, View} from "react-native-ui-lib";
import {ActivityIndicator} from "react-native";
import React, {PureComponent, useCallback, useRef, useState} from "react";


let loading;

class LoadingUI extends PureComponent{

    state = {
        visible: false,
    }

    componentDidMount() {
        loading = this;
    }

    setVisible = visible => {
        this.setState({visible});
    }

    render() {

        return (
            <Modal animationType={'fade'} transparent={true} visible={this.state.visible}>
                <View absF backgroundColor={'red'} center ref>
                    <View center bg-white br20 height={80} width={80}>
                        <ActivityIndicator size="small" color={Colors.black}/>
                    </View>
                </View>
            </Modal>
        );
    }
}

export const Loading = {

    show: () => {
        loading && loading.setVisible(true);
    },
    hide: () => {
        loading && loading.setVisible(false);
    },
    UI: LoadingUI,
}

global.Loading = Loading;
