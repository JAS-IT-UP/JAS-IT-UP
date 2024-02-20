import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = "/api/materials";

export const getMaterial = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const getAllMaterials = async () => {
    const [materials] = await fetchHandler(baseUrl);
    return materials || [];
};