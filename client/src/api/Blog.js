import axios from "axios";

export const getLandFeedRequest = async () =>
  await axios.get("http://localhost:5000/api/posts/landfeed");

export const getBlogFeedRequest = async () =>
  await axios.get("http://localhost:5000/api/posts/feed");

export const getPostRequest = async (id) =>
  await axios.get("http://localhost:5000/api/posts/" + id);
