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
        <absoluteLayout backgroundColor='#FFF951' width="400" className="imagecss">
            <image height="350" width="350" top="250" left='30'
  src=" ~/./images/demologo.jpg"
  stretch="aspectFill"
/>
            <label height="270" top="750" style={styles.button} left='150' className="fas" width='270' onTap={() => navigation.navigate('Secondary')}>Continue &#xf0a9;</label>
        </absoluteLayout>
        // <flexboxLayout style={styles.container}>
        //     <label
        //         className="fas"
        //         style={styles.text}
        //     >
        //         &#xf135; Hello sumit ji!
        //     </label>
        //     <button
        //         style={styles.button}
        //         onTap={() => Dialogs.alert("Tapped!")}
        //     >
        //         Tap me for an alert
        //     </button>
        //     <button
        //         style={styles.button}
        //         onTap={() => navigation.navigate('Secondary')}
        //     >
        //         Go to next screen
        //     </button>
        // </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
    },
    text: {
        textAlignment: "center",
        fontSize: 24,
        color: "black",
    },
    button: {
        fontSize: 24,
        color: "black",
    },
});