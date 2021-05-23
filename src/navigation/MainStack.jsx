import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../containers/Home/Home";
import Question from "../containers/Question/Question";
import Subscription from "../containers/Subscription/Subscription";
import Notification from "../containers/Notification/Notification";
import Favorite from "../containers/Favorite/Favorite";
import PostListStack from "./PostListStack";
import NotificationStack from "./NotificationStack";
import MaterialCommunityIcon from "react-native-paper/src/components/MaterialCommunityIcon";

function HomeStack() {
    return (
        <>
            <PostListStack name={"Home"} firstComponent={Home}/>
        </>
    );
}

function QuestionStack() {
    return (
        <>
            <PostListStack name={"Question"} firstComponent={Question}/>
        </>
    );
}

function SubscriptionStack() {
    return (
        <>
            <PostListStack name={"Subscription"} firstComponent={Subscription}/>
        </>
    );
}

function FavoriteStack() {
    return (
        <>
            <PostListStack name={"Favorite"} firstComponent={Favorite}/>
        </>
    );
}

const Tab = createBottomTabNavigator();

function MainStack() {
    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name="HomeStack"
                            component={HomeStack}
                            options={{
                                tabBarLabel: "Home",
                                tabBarIcon: ({color, focused, size}) =>
                                    (<MaterialCommunityIcon name={"home"}
                                                            color={color}
                                                            size={size}
                                                            direction={"ltr"}/>)
                            }}/>

                <Tab.Screen name="QuestionStack"
                            component={QuestionStack}
                            options={{
                                tabBarLabel: "Question",
                                tabBarIcon: ({color, focused, size}) =>
                                    (<MaterialCommunityIcon name={"head-question"}
                                                            color={color}
                                                            size={size}
                                                            direction={"ltr"}/>)
                            }}/>

                <Tab.Screen name="SubscriptionStack"
                            component={SubscriptionStack}
                            options={{
                                tabBarLabel: "Subscription",
                                tabBarIcon: ({color, focused, size}) =>
                                    (<MaterialCommunityIcon name={"account-multiple-plus"}
                                                            color={color}
                                                            size={size}
                                                            direction={"ltr"}/>)
                            }}/>

                <Tab.Screen name="NotificationStack"
                            component={NotificationStack}
                            options={{
                                tabBarLabel: "Notification",
                                tabBarIcon: ({color, focused, size}) =>
                                    (<MaterialCommunityIcon name={"bell"}
                                                            color={color}
                                                            size={size}
                                                            direction={"ltr"}/>)
                            }}/>

                <Tab.Screen name="FavoriteStack"
                            component={FavoriteStack}
                            options={{
                                tabBarLabel: "Favorite",
                                tabBarIcon: ({color, focused, size}) =>
                                    (<MaterialCommunityIcon name={"heart"}
                                                            color={color}
                                                            size={size}
                                                            direction={"ltr"}/>)
                            }}/>
            </Tab.Navigator>
        </>
    )
}

export default MainStack;
