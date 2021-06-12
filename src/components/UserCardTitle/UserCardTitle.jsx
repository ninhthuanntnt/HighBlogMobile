import React from "react";
import AvatarImageWithDefault from "../AvatarImageWithDefault/AvatarImageWithDefault";
import {CardTitle} from "react-native-paper/src/components/Card/CardTitle";
import {TouchableRipple} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";

function UserCardTitle({user}) {
    let navigation = useNavigation();

    return (
        <TouchableRipple onPress={() => navigation.navigate("PersonalStack", {
            screen: "Personal",
            params: {nickName: user.nickName}
        })}>
            <CardTitle title={`${user.firstName} ${user.lastName}`}
                       subtitle={`@${user.nickName}`}
                       left={() => (
                           <AvatarImageWithDefault imagePath={user.imagePath} size={30}/>)}/>
        </TouchableRipple>
    )
}

export default UserCardTitle;
