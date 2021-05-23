import React from "react";
import {Chip} from "react-native-paper";
import HorizontalView from "../HorizontalView/HorizontalView";

function TagList({tags}){
    let listChip = null
    if(tags){
        listChip = tags.map((tag, index) => (
            <Chip key={index}
                  onPress={()=>{}}
                  mode={"outlined"}
                  style={{marginHorizontal: 5,
                      marginTop: 5,
                  }}
            >{tag.name}</Chip>
        ));
    }

    return (
        <HorizontalView style={{flexWrap: "wrap"}}>
            {listChip}
        </HorizontalView>
    )
}
export default TagList;
