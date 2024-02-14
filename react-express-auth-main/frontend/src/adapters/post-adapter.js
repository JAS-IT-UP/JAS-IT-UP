import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = "/api/make_posts";

export const createPost = async ({  postPicture,
    projectDescription }) => {
      const createdPost = await fetchHandler(baseUrl, getPostOptions({  postPicture, projectDescription}));
      return createdPost;
    }


export const getAllPosts = async () => {
  const [posts] = await fetchHandler(baseUrl);
  return posts || [];
};

export const getPost = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const updatePost = async ({ postPicture, projectDescription }) =>
  fetchHandler(`${baseUrl}/${postId}`, getPatchOptions({ postPicture, projectDescription }));