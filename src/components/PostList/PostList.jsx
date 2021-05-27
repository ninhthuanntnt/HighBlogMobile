import React, {useCallback, useEffect, useState} from "react";
import {FlatList} from "react-native";
import {fetchList, fetchListPostBy} from "./PostList.service";
import {Divider} from "react-native-paper";
import {useFocusEffect} from "@react-navigation/native";

function PostList({url, renderItem, isPagination = true}) {
    let [refreshing, setRefreshing] = useState(false);
    let [listPosts, setListPosts] = useState([]);
    let [staticState, setStaticState] = useState({page: 1})

    useFocusEffect(
        useCallback(() => {
            staticState.page = 1;
            if (isPagination)
                fetchListPostBy(url, staticState.page).then(listData => {
                    setListPosts(listData);
                });
            else
                fetchList(url).then(listData => {
                    setListPosts(listData)
                })
        }, [url]));

    const appendData = () => {
        fetchListPostBy(url, staticState.page + 1)
            .then(data => {
                setListPosts([...listPosts, ...data]);
                staticState.page += 1;
            });
    }

    const resetData = () => {
        if (isPagination)
            fetchListPostBy(url, 1).then(data => {
                setListPosts(data);
                staticState.page = 1;
            });
        else
            fetchList(url).then(data => {
                setListPosts(data);
            })
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
                      onEndReached={isPagination ? appendData : () => {
                      }}
                      removeClippedSubviews={true}
                      maxToRenderPerBatch={20}
            />
        </>
    )
}

export default PostList;
