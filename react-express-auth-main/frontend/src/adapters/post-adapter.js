import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = "/api/posts";

export const createPost = async ({  postPicture,
    postDescription, userId }) =>
  fetchHandler(baseUrl, getPostOptions({  postPicture,
    postDescription, userId  }));

export const getAllPosts = async () => {
  const [posts] = await fetchHandler(baseUrl);
  return posts || [];
};

export const getPost = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const updatePost = async ({ postPicture, postDescription }) =>
  fetchHandler(`${baseUrl}/${postId}`, getPatchOptions({ postPicture, postDescription }));