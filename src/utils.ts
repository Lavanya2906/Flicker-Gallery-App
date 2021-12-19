export function getImageUrl(
  farm: number,
  server: string,
  id: string,
  secret: string
) {
  return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
}
export const api = {
  imagesList:
    "https://www.flickr.com/services/rest/?api_key=9f6a494f8bd15ac12d4f7e144d2b60e2&nojsoncallback=1&method=flickr.photos.getRecent&format=json&per_page=20&extras=o_dims,url_l",
  searchImage:
    "https://www.flickr.com/services/rest/?api_key=9f6a494f8bd15ac12d4f7e144d2b60e2&nojsoncallback=1&method=flickr.photos.search&format=json&per_page=20&extras=o_dims,url_l",
};
