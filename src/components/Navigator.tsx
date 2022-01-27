import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "./HomeScreen";
import {Second} from "./Second";

const StackNavigator = stackNavigatorFactory();

export const mainStackNavigator = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "red",
                },
                headerShown: false,
            }}
        >
            <StackNavigator.Screen
                name="owp"
                component={HomeScreen}
            />
            <StackNavigator.Screen
                name="Secondary"
                component={Second}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
