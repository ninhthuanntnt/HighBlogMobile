import React from "react";
import PostDetail from "../containers/PostDetail/PostDetail";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function PostListStack({name, firstComponent}){

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={name} component={firstComponent}/>
        </Stack.Navigator>
    );
}
