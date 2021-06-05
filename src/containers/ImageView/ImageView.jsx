import React from "react";
import ImageViewer from "react-native-image-zoom-viewer";

function ImageView({route}) {
    let source = route.params.source;

    return (
        <>
            <ImageViewer imageUrls={[{url: source}]}/>
        </>
    )
}
export default ImageView;
