import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Notification from "../containers/Notification/Notification";
import Login from "../containers/Login/Login";

const Stack = createStackNavigator();
export default function NotificationStack(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Notification" component={Notification}/>
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    )
}
