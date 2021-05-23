import React from "react";
import AvatarImageWithDefault from "../AvatarImageWithDefault/AvatarImageWithDefault";
import {CardTitle} from "react-native-paper/src/components/Card/CardTitle";

function UserCardTitle({user}){
    return (
        <>
            <CardTitle title={`${user.firstName} ${user.lastName}`}
                       subtitle={user.nickName}
                       left={() => (
                           <AvatarImageWithDefault imagePath={user.imagePath} size={30}/>)}/>
        </>
    )
}
export default UserCardTitle;
