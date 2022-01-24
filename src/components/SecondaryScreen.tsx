import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "./NavigationParamList";
import { StyleSheet } from "react-nativescript";

type SecondaryScreenProps = {
    route: RouteProp<MainStackParamList, "Secondary">,
    navigation: FrameNavigationProp<MainStackParamList, "Secondary">,
}

export function SecondaryScreen({ navigation }: SecondaryScreenProps) {
    return (
        <absoluteLayout backgroundColor="#FFF951" height="80" marginTop="48">
            <image height="80" width="130" 
                src=" ~/./images/demologo.jpg"
                stretch="fill"
            />
            <label
                left="130"
                top="20"
                style={styles.text}
            >
                Dr. PC LAB 
            </label>
            <slider value={0}  />
        </absoluteLayout>
        // <flexboxLayout style={styles.container}>
        //     <label style={styles.text}>
        //         You're viewing the secondary screen!
        //     </label>
        //     <button
        //         style={styles.button}
        //         onTap={() => navigation.goBack()}
        //     >
        //         Go back
        //     </button>
        // </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "white",
    },
    text: {
        fontWeight:'bold',
        fontSize: 24,
        color: "black",
    },
    button: {
        fontSize: 24,
        color: "#2e6ddf",
    },
});
