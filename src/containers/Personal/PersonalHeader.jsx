import React, {useEffect, useState} from "react";
import {Dimensions, Platform, View} from "react-native";
import ViewableImage from "../../components/ViewableImage/TouchableImage";
import {BASE_URL} from "../../constants/Constant";
import {Caption, Colors, IconButton, Title} from "react-native-paper";
import * as ImagePicker from 'expo-image-picker';

function PersonalHeader({userInfo, uploadBackground, uploadAvatar}) {
    const BACKGROUND_TYPE = "background";
    const AVATAR_TYPE = "avatar";

    const pickImage = async (imageType) => {
        if (Platform.OS !== 'web') {
            const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }

        let aspect = [16, 9]
        if (imageType === AVATAR_TYPE)
            aspect = [1, 1];

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: aspect,
            quality: 1,
        });

        if (!result.cancelled) {
            if (imageType === BACKGROUND_TYPE)
                uploadBackground(result.uri);
            else
                uploadAvatar(result.uri);
        }
    };

    const win = Dimensions.get('window');
    return (
        <>
            <ViewableImage source={BASE_URL + "/" + userInfo.backgroundPath}
                           style={{height: win.width * 9 / 16, resizeMode: "cover"}}>
                <IconButton icon={"pencil-box"}
                            onPress={() => pickImage(BACKGROUND_TYPE)}
                            color={"white"}
                            size={40}
                            style={{
                                position: "absolute",
                                right: -5,
                                bottom: -5
                            }}/>
            </ViewableImage>

            <View style={{
                alignItems: "center",
                marginTop: -100,
                marginBottom: 20,
            }}>
                <ViewableImage source={BASE_URL + "/" + userInfo.imagePath}
                               style={{
                                   width: 200,
                                   height: 200,
                                   resizeMode: "cover",
                                   borderRadius: 100,
                                   borderColor: "white",
                                   borderWidth: 5
                               }}
                               isContainedBorderRadius={true}>
                    <IconButton icon={"pencil"}
                                onPress={() => pickImage(AVATAR_TYPE)}
                                style={{
                                    borderWidth: 1,
                                    borderColor: Colors.grey200,
                                    backgroundColor: "white",
                                    position: "absolute",
                                    left: 140,
                                    top: 150

                                }}/>
                </ViewableImage>

                <Title style={{
                    marginTop: 10,
                    textAlign: "center",
                    fontSize: 30
                }}>
                    {userInfo.firstName} {userInfo.lastName}
                </Title>
                <Caption style={{fontSize: 18}}>@{userInfo.nickName}</Caption>
            </View>
        </>
    )
}

export default PersonalHeader;
