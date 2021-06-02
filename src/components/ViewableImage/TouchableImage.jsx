import React from "react";
import {Image, TouchableHighlight, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

function ViewableImage({source, style, isContainedBorderRadius = false, children}) {
    let navigation = useNavigation();

    let navigateToImageStack = () => navigation.navigate("ImageStack", {
        screen: "ImageView",
        params: {
            source: source
        }
    })
    return (
        <View>
            <TouchableHighlight onPress={navigateToImageStack}
                                style={isContainedBorderRadius === false || {
                                    borderWidth: 1,
                                    borderColor: 'rgba(0,0,0,0.2)',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: style.width,
                                    height: style.height,
                                    backgroundColor: '#fff',
                                    borderRadius: style.borderRadius,
                                }}>
                <Image source={{uri: source}}
                       style={style}
                />
            </TouchableHighlight>
            {children}
        </View>
    );
}

export default ViewableImage;
