// const GOOGLE_SEARCH_API = "AIzaSyCj7NWIRk-cRi4ARqSKzeTSsFRH2ON0_D0";
export const OFFSET_LIVE_CHAT = 15;

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  process.env.REACT_APP_GOOGLE_SEARCH_API;
export const YOUTUBE_SEARCH_API =
  // "https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=faded";
  // "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=Query";
  // "https://corsproxy.io/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
  "https://www.googleapis.com/youtube/v3/search";
