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
        <stackLayout backgroundColor="#FFF951" height="100%" width="100%" paddingTop="200">
            <image  height="350" width="350"src=" ~/./images/demologo.jpg" stretch="aspectFill" horizontalAlignment="center" />
            <label paddingTop="170" style={styles.button} horizontalAlignment="center"  className="fas" onTap={() => navigation.navigate('Secondary')}>Continue &#xf0a9; </label>
        </stackLayout>
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