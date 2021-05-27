import React, {useCallback, useEffect, useState} from "react";
import {FlatList} from "react-native";
import {fetchListPostBy} from "./PostList.service";
import {Divider} from "react-native-paper";
import {useFocusEffect} from "@react-navigation/native";

function PostList({url, renderItem}) {
    let [refreshing, setRefreshing] = useState(false);
    let [listPosts, setListPosts] = useState([]);
    let [staticState, setStaticState] = useState({page: 1})

    useFocusEffect(
        useCallback(() => {
                fetchListPostBy(url, staticState.page).then(listData => setListPosts(listData));
            }, [url]));

    const appendData = () => {
        fetchListPostBy(url, staticState.page + 1)
            .then(data => {
                setListPosts([...listPosts, ...data]);
                staticState.page += 1;
            });
    }

    const resetData = () => {
        fetchListPostBy(url, 1).then(data => {
            setListPosts(data);
            staticState.page = 1;
        });
    }

    //TODO: research about virtual list for best performance
    return (
        <>
            <FlatList data={listPosts}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={renderItem}
                      refreshing={refreshing}
                      onRefresh={resetData}
                      ItemSeparatorComponent={() => (<Divider/>)}
                      onEndReachedThreshold={5}
                      onEndReached={appendData}
                      removeClippedSubviews={true}
                      maxToRenderPerBatch={20}
            />
        </>
    )
}

export default PostList;
