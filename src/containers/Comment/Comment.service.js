import ApiUtil from "../../utils/ApiUtil";

export const fetchListComment = async (postId, page, pageSize = 10) => {
    return await ApiUtil.get("", {postId, page, pageSize});
}

export const addComment = async (postId, parentId, content) => {
    return ApiUtil.post("/api/v1/user/comments", {postId, parentId, content});
}
