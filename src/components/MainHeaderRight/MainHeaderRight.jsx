import React from "react";
import {Button} from "react-native-paper";
import {View} from "react-native";
import {useSelector} from "react-redux";
import LoginedView from "../LoginedView/LoginedView";
import AvatarImageWithDefault from "../AvatarImageWithDefault/AvatarImageWithDefault";

export function MainHeaderRight({navigation}) {

    let userData = useSelector(state => state.userData);

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
