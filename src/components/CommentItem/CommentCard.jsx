import React from "react";
import {Card, Text, Title} from "react-native-paper";
import UserCardTitle from "../UserCardTitle/UserCardTitle";
import CardContent from "react-native-paper/src/components/Card/CardContent";

function CommentCard({comment, style}){
    return (
        <Card style={style}>
            <UserCardTitle user={comment.user}/>
            <CardContent style={{marginTop: -25}}>
                <Title>{comment.title}</Title>
                <Text>{comment.content}</Text>
            </CardContent>
        </Card>
    )
}

export default CommentCard;
