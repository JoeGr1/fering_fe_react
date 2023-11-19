import axios from "axios";

const wordpressAPI = `${process.env.REACT_APP_WORDPRESS_API_URL}`;

const wordpressAcfAPI = `${process.env.REACT_APP_ACF_WORDPRESS_API_URL}`;

//PAGES

export const GET_PAGE = (id) =>
  axios.get(`${process.env.REACT_APP_WORDPRESS_API_URL}/pages/${id}`);

//images

export const GET_IMAGE_URL = (imageId) =>
  axios.get(`${process.env.REACT_APP_WORDPRESS_API_URL}/media/${imageId}`);

//options page

export const GET_OPTIONS_ACF = () =>
  axios.get(`${process.env.REACT_APP_ACF_WORDPRESS_API_URL}/options/options`);
