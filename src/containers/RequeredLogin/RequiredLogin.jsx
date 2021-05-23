import React from "react";
import {View, ViewComponent} from "react-native";
import {Button, Text} from "react-native-paper";

function RequiredLogin({navigation}){
    return (
        <View>
            <Text>Please login</Text>
            <Button onPress={()=>navigation.navigate("LoginStack")}>
                Login
            </Button>
        </View>
    )
}

export default RequiredLogin;
