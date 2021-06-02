import React from "react";
import {useSelector} from "react-redux";
import {View} from "react-native";

function SameWithLoginedUserView({nickName, children, style}) {
    let userData = useSelector(state => state.userData);
    let childComponent = null;
    if (userData) {
        if (userData.nickName === nickName) {
            childComponent = (
                <View style={style}>
                    {children}
                </View>
            );
        }
    }
    return (
        {childComponent}
    )
}

export default SameWithLoginedUserView;
