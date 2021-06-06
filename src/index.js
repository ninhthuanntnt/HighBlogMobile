import React from 'react';
import ApplicationNavigator from "./navigation/ApplicationNavigator";
import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
    NavigationContainer
} from "@react-navigation/native";
import {Provider} from "react-redux";
import store from "./redux/store";

import {
    DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme,
    Provider as PaperProvider
} from 'react-native-paper';
import {PreferencesContext} from "./config/PreferencesContext";

const CustomizedDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
        ...NavigationDarkTheme.colors,
        ...PaperDarkTheme.colors,
        primary: "#005a8d"
    },
}

const CustomizedLightTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
        ...NavigationDefaultTheme.colors,
        ...PaperDefaultTheme.colors,
        background: "white",
        primary: "#005a8d"
    },
}

export default function Index() {

    const [isThemeDark, setIsThemeDark] = React.useState(false);

    let theme = isThemeDark ? CustomizedDarkTheme : CustomizedLightTheme;

    const toggleTheme = React.useCallback(() => {
        return setIsThemeDark(!isThemeDark);
    }, [isThemeDark]);

    const preferences = React.useMemo(
        () => ({
            toggleTheme,
            isThemeDark,
        }),
        [toggleTheme, isThemeDark]
    );

    return (
        <Provider store={store}>
            <PreferencesContext.Provider value={preferences}>
                <PaperProvider theme={theme}>
                    <NavigationContainer theme={theme}>
                        <ApplicationNavigator/>
                    </NavigationContainer>
                </PaperProvider>
            </PreferencesContext.Provider>
        </Provider>
    )
}

