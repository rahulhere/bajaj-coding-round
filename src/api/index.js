import axios from "axios";

const api = axios.create({
  baseURL: "https://hiring.bajajfinservhealth.in/api",
});

export const getListData = async () => {
  const data = await api.get("/renderMe/");

  return data.map((item) => ({
    login: item.login,
    avatar_url: item.avatar_url,
    html_url: item.url.html_url,
    type: item.type,
  }));
};
