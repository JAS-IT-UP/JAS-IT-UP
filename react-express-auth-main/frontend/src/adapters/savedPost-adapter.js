import { fetchHandler, getPostOptions, deleteOptions, } from "../utils";

const baseUrl = "/api/saved_posts";

export const getUserSavedPosts = async (id) => {
  try {
    const data = await fetchHandler(`${baseUrl}/${id}`);
    console.log(data, "these are my saved posts");
    return data || [];
  } catch (error) {
    console.error("Error fetching my saved posts:", error);
  }
};

export const createSavedPost = async ( post_id) => {
  const data = await fetchHandler(
    baseUrl,
    getPostOptions({ post_id })
  );
  return data;
};

export const deleteSavedPost = async (post_id) => {
  const data = await fetchHandler(`${baseUrl}/${post_id}`, deleteOptions);
  return data;
};

export const getUserSavedPostInfo = async (userId) => {
  const data = await fetchHandler(`${baseUrl}/post/${userId}`)
  return data;
};