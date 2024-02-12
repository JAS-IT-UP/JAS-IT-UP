import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = "/api/posts";

export const createPost = async ({  postPicture,
    projectDescription, userId}) =>
  fetchHandler(baseUrl, getPostOptions({  postPicture,
    projectDescription, userId}));

export const getAllPosts = async () => {
  const [posts] = await fetchHandler(baseUrl);
  return posts || [];
};

export const getPost = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const updatePost = async ({ postPicture, projectDescription }) =>
  fetchHandler(`${baseUrl}/${postId}`, getPatchOptions({ postPicture, projectDescription }));