import { fetchHandler, getPostOptions, getPatchOptions, deleteOptions } from "../utils";

const baseUrl = "/api/posts";

export const createPost = async (payload) => {
  const data = await fetchHandler(
    "/api/createPost",
    getPostOptions(payload)
    );
    console.log(payload, "this is the payload")
  console.log(data, "this is my adapter post")
  return data;
};

export const getAllPosts = async () => {
  const data = await fetchHandler(baseUrl);
  // console.log(data, "this is my adapter post")
  return data || [];
};

export const getUserPosts = async (id) => {
  try {
    const data = await fetchHandler(`/api/user_posts/${id}`);
    console.log(data, "these are the user's posts");
    return data || [];
  } catch (error) {
    console.error("Error fetching user's posts:", error);
    throw new Error("Failed to fetch user's posts");
  }
};

export const getPost = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const deletePost = async (id) => {
  const data = await fetchHandler(`${baseUrl}/${id}`, deleteOptions);
  return data;
};

export const updatePost = async ({ postPicture, projectDescription }) =>
fetchHandler(`${baseUrl}/${postId}`, getPatchOptions({ postPicture, projectDescription }));
