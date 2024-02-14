import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = "/api/post_Materials";

export const createPostMaterial = async ({ count, postId, materialId }) =>
  fetchHandler(baseUrl, getPostOptions({ count, postId, materialId }));

export const getAllPostMaterials = async () => {
  const [postMaterials] = await fetchHandler(baseUrl);
  return postMaterials || [];
};

export const getPostMaterial = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const updatePostMaterial = async ({ count, postId, materialId }) =>
  fetchHandler(
    `${baseUrl}/${postMaterialId}`,
    getPatchOptions({ count, postId, materialId })
  );
