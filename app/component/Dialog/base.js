import React from "react";
import {Colors, Dialog, PanningProvider} from "react-native-ui-lib";
import {StyleSheet} from "react-native";
import {Text, View} from "react-native-ui-lib/core";

export const DefaultHead = ({title}) => {
    return (
        <View bg-theme center height={30}>
            <Text marginV-10 font18b text2 children={title}/>
        </View>
    );
}

export const BaseDialog = ({
                               position = 'bottom',
                               panDirection = 'down',
                               visible,
                               height,
                               width,
                               onDismiss,
                               contentComp,
                               headComp,
                               roundedDialog,
                               overlayBackgroundColor,
                                ...args
                           }) => {

    // position can be top center bottom
    // panDirection can be down up

    let direction = PanningProvider.Directions.DOWN;
    if (panDirection === 'up') direction = PanningProvider.Directions.UP;

    return (
        <Dialog
            migrate
            key={"Dialog"}
            height={height || '45%'}
            width={width|| '100%'}
            bottom={position === 'bottom'}
            top={position === 'top'}
            center={position === 'center'}
            overlayBackgroundColor={overlayBackgroundColor || Colors.dialog}
            panDirection={direction}
            onDialogDismissed={onDismiss}
            containerStyle={[styles.roundedDialog, {backgroundColor: Colors.theme}, roundedDialog]}
            renderPannableHeader={headComp ? () => headComp : undefined}
            visible={visible}
            onDismiss={onDismiss}
            {...args}>
            {contentComp}
        </Dialog>
    );
};

const styles = StyleSheet.create({
    roundedDialog: {
        flex: 1,
    },
});

