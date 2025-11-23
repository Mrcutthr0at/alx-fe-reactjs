import axios from "axios";

const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;
const baseUrl = import.meta.env.VITE_APP_BASE_URL || "https://api.github.com";

const githubApi = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: apiKey ? `token ${apiKey}` : undefined,
  },
});

export const getUser = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

export default githubApi;