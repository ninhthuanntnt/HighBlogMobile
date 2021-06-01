import React, {useEffect, useRef, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import HorizontalView from "../HorizontalView/HorizontalView";
import {TextInput} from "react-native";

function SearchHeader() {
    console.log("Re-render SearchHeader");
    let navigation = useNavigation();
    let [searchText, setSearchText] = useState("");
    let textInputRef = useRef();

    const onSubmit = () => {
        if (searchText.length > 0) {
            navigation.navigate("SearchPostResult", {searchText})
        }
    }

    useEffect(()=>{
        textInputRef.focus();
    }, [])

    let showedKeyboard = Boolean(searchText.length > 0);

    return (
        <HorizontalView>
            <TextInput placeholder={"Search..."}
                       style={{flex: 1}}
                       value={searchText}
                       autoFocus={true}
                       onChangeText={(text) => setSearchText(text)}
                       onSubmitEditing={onSubmit}
                       blurOnSubmit={showedKeyboard}
                       ref={ref => (textInputRef = ref)}/>
        </HorizontalView>
    )
}

export default SearchHeader;
