import React, {useRef} from "react";
import {Animated, Image, View} from "react-native";
import Logo from "../../assets/images/logo.png";

function AnimatedLogo({width, height, style}){
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true
        }).start();
    };

    fadeIn();

    return (
        <Animated.View style={{...style, alignItems: "center", opacity: fadeAnim}}>
            <Image source={Logo} style={{width: width, height: height}}/>
        </Animated.View>
    )
}
export default AnimatedLogo;
