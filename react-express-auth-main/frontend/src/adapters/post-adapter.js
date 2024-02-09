import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = "/api/posts";

export const getAllPosts = async () => {
  const [posts] = await fetchHandler(baseUrl);
  return posts || [];
};
