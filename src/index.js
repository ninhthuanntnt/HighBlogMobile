import React from 'react';
import ApplicationNavigator from "./navigation/ApplicationNavigator";
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import store from "./redux/store";

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#3498db',
        accent: '#f1c40f',
    },
};
export default function Index() {

    return (
        <Provider store={store}>
            <PaperProvider>
                <NavigationContainer>
                    <ApplicationNavigator/>
                </NavigationContainer>
            </PaperProvider>
        </Provider>
    )
}

