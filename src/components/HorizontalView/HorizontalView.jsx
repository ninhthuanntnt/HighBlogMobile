import React from "react";
import {View} from "react-native";

function HorizontalView({children, style}) {
    return (
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            ...style
        }}>
            {children}
        </View>
    )
}

export default HorizontalView;
