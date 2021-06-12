import React from "react";
import {useNavigation} from "@react-navigation/native";
import {Card, TouchableRipple} from "react-native-paper";
import {Alert} from "react-native";
import AvatarImageWithDefault from "../AvatarImageWithDefault/AvatarImageWithDefault";
import {CardTitle} from "react-native-paper/src/components/Card/CardTitle";

function NotificationItem({notification}) {
    let sender = notification.sender;
    let navigation = useNavigation();


    let notificationTitle = null;
    let notifcationSubtitle = null;

    switch (notification.type) {
        case "ADMIN":
            notificationTitle = "Highblog: " + notification.content;
            notifcationSubtitle = "highblog"
            break;
        case "POST":
            notificationTitle = `Posted ${notification.content}`;
            notifcationSubtitle = `@${sender.nickName}`;
            break;
    }

    const navigateToDetail = () => {
        switch (notification.type) {
            case "ADMIN":
                Alert.alert("System notification", notification.content);
                break;
            case "POST":
                navigation.navigate("PostDetailStack", {screen: "PostDetail", params: {postId: notification.sourceId}})
                break;
        }
    }

    return (
        <Card>
            <TouchableRipple onPress={navigateToDetail}>
                <CardTitle title={notificationTitle}
                           subtitle={notifcationSubtitle}
                           left={() => (
                               <AvatarImageWithDefault imagePath={sender.imagePath} size={30}/>)}/>
            </TouchableRipple>
        </Card>
    )
}

export default NotificationItem;