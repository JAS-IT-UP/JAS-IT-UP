import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = "/api/posts";

export const createPost = async ({  postPicture, projectDescription, userId}) => {
  const data = await fetchHandler("/api/createPost", getPostOptions({  postPicture, projectDescription, userId}));
  // if(error) throw error
  // console.log(data, "this is the data")
  return data
}



export const getAllPosts = async () => {
  const [posts] = await fetchHandler(baseUrl);
  return posts || [];
};

export const getPost = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const updatePost = async ({ postPicture, projectDescription }) =>
fetchHandler(`${baseUrl}/${postId}`, getPatchOptions({ postPicture, projectDescription }));