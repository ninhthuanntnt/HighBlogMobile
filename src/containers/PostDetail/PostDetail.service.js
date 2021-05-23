import ApiUtil from "../../utils/ApiUtil";

export const getPostDetail = async (postId) => {
    return await ApiUtil.get(`/api/v1/posts/${postId}`);
}

export const createPostVote = async (postId, voteType) => {
    await ApiUtil.post("/api/v1/user/posts-votes", {
        postId,
        voteType
    });
}

export const updatePostVote = async (postId, voteType) => {
    await ApiUtil.put("/api/v1/user/posts-votes", {
        postId,
        voteType
    });
}

export const deletePostVote = async (postId) => {
    await ApiUtil.delete("/api/v1/user/posts-votes", {postId});
}

export const addToFavorite = async (postId) =>{
    await ApiUtil.post("/api/v1/user/favorite-posts", {postId});
}

export const deleteFromFavorite = async (postId) => {
    await ApiUtil.delete("/api/v1/user/favorite-posts",null, {postId});
}
