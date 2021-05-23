import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import SearchPostHistory from "../containers/SearchPost/SearchPostHistory";
import SearchPostResult from "../containers/SearchPost/SearchPostResult";

const Stack = createStackNavigator();
export default function SearchStack(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={"SearchPostHistory"} component={SearchPostHistory}/>
            <Stack.Screen name={"SearchPostResult"} component={SearchPostResult}/>
        </Stack.Navigator>
    );
}
