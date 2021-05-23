import React from "react";
import {TextInput, TextInputComponent, View} from "react-native";
import PostList from "../../components/PostList/PostList";
import CommentItem from "../../components/CommentItem/CommentItem";
import {Card, IconButton} from "react-native-paper";
import CardContent from "react-native-paper/src/components/Card/CardContent";
import CardActions from "react-native-paper/src/components/Card/CardActions";
import HorizontalView from "../../components/HorizontalView/HorizontalView";
import {addComment} from "./Comment.service";

function Comment({navigation, route}) {
    let postId = route.params.postId;
    let parentId = route.params.parentId;

    return (
        <View style={{flex: 1}}>
            <PostList
                url={`/api/v1/comments?postId=${postId}`}
                renderItem={(item)=>(
                    <CommentItem comment={item.item}/>
                )}
            />
            <Card>
                <HorizontalView style={{justifyContent: "space-between"}}>
                    <View style={{flex:1}}>
                        <CardContent  style={{borderBottom: "1px solid black"}}>
                            <TextInput placeholder={"Add your comment..."}/>
                        </CardContent>
                    </View>
                    <CardActions>
                        <IconButton icon={"send-circle"} onPress={()=>addComment(postId, null, "Good!")}/>
                    </CardActions>
                </HorizontalView>
            </Card>
        </View>
    )
}

export default Comment;
