import { fetchHandler, getPostOptions, deleteOptions } from "../utils";

const baseUrl = "/api/saved_posts";

export const getAllSavedPosts = async () => {
    const [savedPosts] = await fetchHandler(baseUrl);
    return savedPosts || [];
};

export const createdSavedPost = async ({ post_id, user_id }) => {
    const data = await fetchHandler(baseUrl, 
        getPostOptions({ post_id, user_id })
    );
    return data;
};

export const deleteSavedPost = async (id) => {
    const data = await fetchHandler(`${baseUrl}/${id}`, deleteOptions({ id }));
    return data;
}

