import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { Dialogs } from '@nativescript/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { StyleSheet } from "react-nativescript";
import { MainStackParamList } from "./NavigationParamList";

type HomeScreenProps = {
    route: RouteProp<MainStackParamList, "Home">,
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
}

export function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <gridLayout backgroundColor="#FFF951" height="100%" width="100%" >
            <image horizontalAlignment="center" verticalAlignment="middle" height="350" width="350" src=" ~/./images/demologo.jpg" stretch="aspectFill" />
            <label paddingBottom="20" horizontalAlignment="center" verticalAlignment="bottom" style={styles.button} className="fas" onTap={() => navigation.navigate('Secondary')}>Continue &#xf0a9; </label>
        </gridLayout>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlignment: "center",
        fontSize: 24,
        color: "black",
    },
    button: {
        fontSize: 25,
        color: "black",
    },
});