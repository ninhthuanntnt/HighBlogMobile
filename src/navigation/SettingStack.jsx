import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Setting from "../containers/Setting/Setting";

const Stack = createStackNavigator();
export default function SettingStack(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={"Setting"} component={Setting}/>
        </Stack.Navigator>
    );
}
