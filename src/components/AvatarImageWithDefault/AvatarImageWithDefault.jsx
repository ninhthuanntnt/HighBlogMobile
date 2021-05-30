import React from "react";
import {Avatar} from "react-native-paper";
import DefaultAvatar from "../../assets/images/default_avatar.png";
import {BASE_URL} from "../../constants/Constant";

function AvatarImageWithDefault({imagePath, size, onTouchEnd}){
    let avatar = DefaultAvatar;
    if (imagePath) {
            avatar = {uri: BASE_URL + '/' + imagePath}
    }
    return (

        <Avatar.Image source={avatar}
                      size={40}
                      onTouchEnd={onTouchEnd}/>
    )
}

export default AvatarImageWithDefault;
