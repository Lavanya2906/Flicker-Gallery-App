import { AxiosResponse } from "axios";

export interface InitialStateType {
  images: IImage[];
  showLoader: boolean;
}

export interface IThunkAPI {
  rejectValue: AxiosResponse;
}

export interface IImage {
  farm: number;
  height_l: number;
  id: string;
  isfamily: boolean;
  isfriend: boolean;
  ispublic: boolean;
  owner: string;
  secret: string;
  server: string;
  title: string;
  url_l: string;
  width_l: number;
}
