import React from "react";
import {TouchableHighlight} from "react-native";

function TouchableRadius({style, onPress, children}){

    return (
        <TouchableHighlight style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: style.width,
            height: style.height,
            backgroundColor: '#fff',
            borderRadius: style.borderRadius,
        }} onPress={onPress}>
            {children}
        </TouchableHighlight>
    )

}

export default TouchableRadius
