import React from "react";
import {View} from "react-native";

function ConditionalView({condition, children, style}) {
    return (
        <View style={style}>
            {condition ? children : <></>}
        </View>
    );
}

export default ConditionalView;
