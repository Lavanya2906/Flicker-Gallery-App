import axios, { AxiosResponse } from "axios";
import { api } from "../utils";

export const fetchRecentPhotos = async (): Promise<AxiosResponse> => {
  return await axios
    .get(api.imagesList)
    .then((response) => response)
    .catch((error) => error);
};

export const searchImages = async (text: string): Promise<AxiosResponse> => {
  return await axios
    .get(api.searchImage + `&text=${text}`)
    .then((response) => response)
    .catch((error) => error);
};
