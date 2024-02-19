import { fetchHandler, getPostOptions, getPatchOptions, deleteOptions } from "../utils";

const baseUrl = "/api/posts";

export const createPost = async ({
  postPicture,
  projectDescription,
  userId,
}) => {
  const data = await fetchHandler(
    "/api/createPost",
    getPostOptions({ postPicture, projectDescription, userId })
  );
  return data;
};

export const getAllPosts = async () => {
  const data = await fetchHandler(baseUrl);
  // console.log(data, "this is my adapter post")
  return data || [];
};

export const getPost = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const deletePost = async ({ id }) => {
  return fetchHandler(`${baseUrl}/${id}`, deleteOptions({ id }));
  // const post = await fetchHandler(`'/api/deletePosts/${[id]}`, deleteOptions({ id }));
  // console.log(post, "this is my adapter post")
  // return post;
};
console.log(deletePost, "this is my delete post adapter")

export const updatePost = async ({ postPicture, projectDescription }) =>
fetchHandler(`${baseUrl}/${postId}`, getPatchOptions({ postPicture, projectDescription }));
