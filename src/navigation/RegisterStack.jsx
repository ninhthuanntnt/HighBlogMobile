import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Register from "../containers/Register/Register";

const Stack = createStackNavigator();
export default function RegisterStack(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={"Register"} component={Register}/>
        </Stack.Navigator>
    );
}
