import axios from "axios";

const wordpressAPI = `${process.env.REACT_APP_WORDPRESS_API_URL}`;

const wordpressAcfAPI = `${process.env.REACT_APP_ACF_WORDPRESS_API_URL}`;

//PAGES

export const GET_PAGE = (id) => axios.get(`${wordpressAPI}/pages/${id}`);

//images

export const GET_IMAGE_URL = (imageId) =>
  axios.get(`${wordpressAPI}/media/${imageId}`);

//files

export const GET_FILE_URL = (fileId) =>
  axios.get(`${wordpressAPI}/media/${fileId}`);

//options page

export const GET_OPTIONS_ACF = () =>
  axios.get(`${wordpressAcfAPI}/options/options`);
