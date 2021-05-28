import React from "react";
import {Button, Card, Text, Title} from "react-native-paper";
import CardContent from "react-native-paper/src/components/Card/CardContent";
import {useNavigation} from "@react-navigation/native";
import UserCardTitle from "../UserCardTitle/UserCardTitle";
import CardActions from "react-native-paper/src/components/Card/CardActions";

function CommentItem({comment, postId}) {
    let navigation = useNavigation();

    let childComments = null;

    let navigationToChildCommentScreen = () => navigation.navigate("ChildComment", {comment: comment, postId: postId});
    if (comment.childComments) {
        let firstChildComments = comment.childComments[0];

        let loadMore = null;

        if (comment.childComments.length > 1) {
            loadMore = (
                <Button onPress={navigationToChildCommentScreen}>
                    See more comments...
                </Button>
            );
        }

        childComments = (
            <Card style={{paddingLeft: 30}} key={firstChildComments.id}>

                <UserCardTitle user={firstChildComments.user}/>
                <CardContent style={{marginTop: -25, borderLeftColor: "#ccc", borderLeftWith: 1}}>
                    <Title>{firstChildComments.title}</Title>
                    <Text>{firstChildComments.content}</Text>
                </CardContent>
                <CardContent>
                    {loadMore}
                </CardContent>
            </Card>
        );
    }
    return (
        <>
            <Card>
                <UserCardTitle user={comment.user}/>
                <CardContent style={{marginTop: -25}}>
                    <Title>{comment.title}</Title>
                    <Text>{comment.content}</Text>
                </CardContent>
                <CardActions style={{justifyContent: "flex-end"}}>
                    <Button onPress={navigationToChildCommentScreen}>reply</Button>
                </CardActions>
            </Card>
            {childComments}
        </>
    )
}

export default CommentItem;
