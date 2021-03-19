// const tags = "tags=animal";

export const SEARCH_PHOTOS_URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=1926f4352f33fe9347ac866d675dbc3f&tags=`;
export const ENDPOINT = `&per_page=5&format=json&nojsoncallback=1&api_sig=2081f590fcb8396ce6a24dcfb78a0e0c`;
export const URL = SEARCH_PHOTOS_URL + `animal` + ENDPOINT;
