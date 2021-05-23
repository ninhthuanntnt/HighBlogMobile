import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import PostDetail from "../containers/PostDetail/PostDetail";
import Comment from "../containers/Comment/Comment";

const Stack = createStackNavigator();
export default function PostDetailStack(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={"PostDetail"} component={PostDetail}/>
            <Stack.Screen name={"Comment"} component={Comment}/>
        </Stack.Navigator>
    );
}
