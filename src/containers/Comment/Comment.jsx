import React, {useState} from "react";
import {TextInput, View} from "react-native";
import PostList from "../../components/PostList/PostList";
import CommentItem from "../../components/CommentItem/CommentItem";
import {Button, Card, IconButton} from "react-native-paper";
import CardContent from "react-native-paper/src/components/Card/CardContent";
import CardActions from "react-native-paper/src/components/Card/CardActions";
import HorizontalView from "../../components/HorizontalView/HorizontalView";
import {addComment} from "./Comment.service";
import LoginedView from "../../components/LoginedView/LoginedView";


function Comment({navigation, route}) {
    let postId = route.params.postId;
    let parentId = route.params.parentId;
    const [value, setValue] = useState(0);

    let [commentText, setCommentText] = useState('');

    const forceUpdate = () => {
        setValue(value + 1);
    }

    const addNewComment = () => {
        addComment(postId, null, commentText);
        setCommentText('');
        forceUpdate();
    }

    return (
        <View style={{flex: 1}}>
            <PostList
                key={value}
                url={`/api/v1/comments?postId=${postId}`}
                renderItem={(item) => (
                    <CommentItem comment={item.item} postId={postId}/>
                )}
                isPagination={false}
            />
            {/* TODO: Create a component to use in both Comment and ChildComment*/}
            <Card>
                <LoginedView fallBackComponent={(
                    <CardContent>
                        <Button onPress={() => navigation.navigate("LoginStack")}>Login to add comment...</Button>
                    </CardContent>
                )}>
                    <HorizontalView style={{justifyContent: "space-between"}}>
                        <View style={{flex: 1}}>
                            <CardContent style={{borderBottom: "1px solid black"}}>
                                <TextInput placeholder={"Add your comment..."}
                                           onChangeText={(text) => setCommentText(text)}
                                           value={commentText}/>
                            </CardContent>
                        </View>
                        <CardActions>
                            <IconButton icon={"send-circle"}
                                        onPress={addNewComment}/>
                        </CardActions>
                    </HorizontalView>
                </LoginedView>
            </Card>
        </View>
    )
}

export default Comment;
