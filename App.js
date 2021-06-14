import React from 'react';
import Index from "./src";
import {Alert} from "react-native";

export default function App() {

    ErrorUtils.setGlobalHandler(function() {
        Alert.alert("App", "Something error!");
    });
    return (
        <>
            <Index/>
        </>
    );
}
