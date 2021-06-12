import React from "react";
import {useSelector} from "react-redux";

function CurrentUserLoginView({user, children}) {
    let userData = useSelector(state => state.userData);

    let visibleView = children;
    if (userData.nickName == user.nickName)
        visibleView = (<></>);

    return visibleView;
}

export default CurrentUserLoginView;