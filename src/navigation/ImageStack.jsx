import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import ImageView from "../containers/ImageView/ImageView";

const Stack = createStackNavigator();
export default function ImageStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={"ImageView"} component={ImageView}/>
        </Stack.Navigator>
    );
}
