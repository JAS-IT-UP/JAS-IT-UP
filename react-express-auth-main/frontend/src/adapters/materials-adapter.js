import { fetchHandler, getPostOptions } from "../utils";

const baseUrl = "/api/materials";

export const getMaterial = async (id) => fetchHandler(`${baseUrl}/${id}`);

