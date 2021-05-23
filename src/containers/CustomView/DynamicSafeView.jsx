import React from "react";
import {StatusBar, StyleSheet, View} from "react-native";

export default function DynamicSafeView(prop){
    return(
        <View style={styles.container}>
            {prop.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:StatusBar.currentHeight
    }
});
