import axios from "axios";

/** base url to make request to the movie database */

/** Added package.json - "proxy": "https://api.themoviedb.org/", */
/** baseURL: https://api.themoviedb.org/3 */
/** Avoid the cor issue */
const instance = axios.create({
  baseURL: "3",
});

export default instance;
