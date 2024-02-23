import { fetchHandler, getPostOptions, getPatchOptions, deleteOptions } from "../utils";

const baseUrl = "/api/posts";

export const createPost = async (payload) => {
  const data = await fetchHandler(
    "/api/createPost",
    getPostOptions(payload)
  );
  console.log(data, "this is my adapter post")
  return data;
};

export const getAllPosts = async () => {
  const data = await fetchHandler(baseUrl);
  console.log(data, "this is my adapter post")
  return data || [];
};

export const getPost = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const deletePost = async (id) => {
  const data = await fetchHandler(`${baseUrl}/${id}`, deleteOptions({ id }) );
  return data;
};

export const updatePost = async ({ postPicture, projectDescription }) =>
fetchHandler(`${baseUrl}/${postId}`, getPatchOptions({ postPicture, projectDescription }));
