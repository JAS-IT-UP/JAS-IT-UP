import { fetchHandler, getPostOptions, getPatchOptions, deleteOptions } from "../utils";

const baseUrl = "/api/posts";

export const createPost = async ({  postPicture, projectDescription, userId}) => {
  const data = await fetchHandler("/api/createPost", getPostOptions({  postPicture, projectDescription, userId}));
  return data;
};

export const getAllPosts = async () => {
  const [posts] = await fetchHandler(baseUrl);
  return posts || [];
};

export const getPost = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const deletePost = async (id) => {
  const data = await fetchHandler(`${baseUrl}/${id}`, deleteOptions({ id }));
  return data;
};

export const updatePost = async ({ postPicture, projectDescription }) =>
fetchHandler(`${baseUrl}/${postId}`, getPatchOptions({ postPicture, projectDescription }));
