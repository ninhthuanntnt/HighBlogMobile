import React from "react";
import {Caption, Card, IconButton, Text, Title, TouchableRipple} from "react-native-paper";
import CardContent from "react-native-paper/src/components/Card/CardContent";
import {View} from "react-native";
import CardActions from "react-native-paper/src/components/Card/CardActions";
import {CardTitle} from "react-native-paper/src/components/Card/CardTitle";
import AvatarImageWithDefault from "../AvatarImageWithDefault/AvatarImageWithDefault";
import HorizontalView from "../HorizontalView/HorizontalView";
import LoginedView from "../LoginedView/LoginedView";
import TagList from "../TagList/TagList";
import {useNavigation} from "@react-navigation/native";
import UserCardTitle from "../UserCardTitle/UserCardTitle";

function PostItem({post}) {
    let navigation = useNavigation();
    return (
        <Card>
            <UserCardTitle user={post.user}/>
            <CardContent>
                <TouchableRipple onPress={
                    () => navigation.navigate("PostDetailStack", {screen: "PostDetail", params: {postId: post.id}})
                }>
                    <View>
                        <Title>{post.title}</Title>
                        <Text>{post.summary}</Text>
                        <Caption
                            style={{textAlign: "right"}}>{new Date(post.createdDate).toDateString()}</Caption>
                    </View>
                </TouchableRipple>
            </CardContent>
            <CardActions style={{paddingBottom: 0}}>
                <TagList tags={post.tags}/>
            </CardActions>
            <CardActions style={{justifyContent: "space-between"}}>
                <HorizontalView>
                    <Caption style={{marginHorizontal: 5}}>{post.numberOfVotes} votes</Caption>
                    <Caption style={{marginHorizontal: 5}}>{post.numberOfComments} comments</Caption>
                    <Caption style={{marginHorizontal: 5}}>{post.numberOfFavorites} saved</Caption>
                </HorizontalView>
            </CardActions>
        </Card>
    )
}

export default PostItem;
