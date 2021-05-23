import React from "react";
import {Avatar, Button} from "react-native-paper";
import DefaultAvatar from "../../assets/default_avatar.png";
import {Image, View} from "react-native";
import {useSelector} from "react-redux";
import {BASE_URL} from "../../constants/Constant";
import LoginedView from "../LoginedView/LoginedView";
import AvatarImageWithDefault from "../AvatarImageWithDefault/AvatarImageWithDefault";

export function MainHeaderRight({navigation}) {

    let userData = useSelector(state => state.userData);
    console.log(userData);

    // let avatar = DefaultAvatar;
    // if (userData) {
    //     if (userData.imagePath) {
    //         avatar = {uri: BASE_URL + '/' + userData.imagePath}
    //     }
    // }
    return (
        <View style={{flexDirection: "row"}}>
            <Button onPress={() => navigation.navigate("SearchStack")}>Search</Button>
            <LoginedView
                fallBackComponent={(
                    <Button onPress={() => navigation.navigate("LoginStack")}>
                        Login
                    </Button>
                )}>
                {/*<Avatar.Image source={avatar}*/}
                {/*              size={40}*/}
                {/*              onTouchEnd={() => navigation.navigate("SettingStack")}*/}
                {/*              style={{marginRight: 8}}/>*/}
                <AvatarImageWithDefault imagePath={userData ? userData.imagePath : null}
                                        size={40}
                                        onTouchEnd={() => navigation.navigate("SettingStack")}
                                        style={{marginRight: 8}}
                />
            </LoginedView>
        </View>
    )
}
