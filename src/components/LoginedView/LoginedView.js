import React from "react";
import {useSelector} from "react-redux";

export default function LoginedView({fallBackComponent = null, children}) {
    let isExistUserData = useSelector(state => Boolean(state.userData))

    let renderedComponent = fallBackComponent;
    if(isExistUserData){
        renderedComponent = children;
    }
    return (
        <>
            {renderedComponent}
        </>
    );
}
