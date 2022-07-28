import {Button, View} from "react-native-ui-lib";
import React, {useState} from "react";
import {PasswordDialog, NameDialog} from "../../component/Dialog/input";
import {WalletDialog} from "../../component/Dialog/list";
import {Loading} from "../../component/Loading";

const DAppTab = () => {

    const [pwdVisible, setPwdVisible] = useState(false);
    const [nameVisible, setNameVisible] = useState(false);
    const [walletVisible, setWalletVisible] = useState(false);

    return (
        <View useSafeArea flex center>
            <Button label={'password dialog'} onPress={() => {
                setPwdVisible(true);
            }}/>
            <Button marginT-5 label={'name dialog'} onPress={() => {
                setNameVisible(true);
            }}/>
            <Button marginT-5 label={'add wallet dialog'} onPress={() => {
                setWalletVisible(true);
            }}/>
            <Button marginT-5 label={'add wallet dialog'} onPress={() => {
               Loading.show();
               setTimeout(Loading.hide,2000);
            }}/>
            <PasswordDialog visible={pwdVisible} onDismiss={() => {
                setPwdVisible(false);
            }}/>
            <NameDialog visible={nameVisible} onDismiss={() => {
                setNameVisible(false);
            }} onConfirm={console.info}/>
            <WalletDialog visible={walletVisible} onDismiss={() => {
                setWalletVisible(false);
            }} onConfim={console.info}/>
        </View>

    );
};

export default DAppTab;
