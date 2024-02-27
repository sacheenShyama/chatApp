import axios from "axios";

const url = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    //   axios.post(url,data)
    await axios.post(`${url}/add`, data);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUsers = async () => {
  try {
    let response = await axios.get(`${url}/users`);
    // console.log(response)
    return response.data;
  } catch (error) {
    console.log("error whiole get api", error.message);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
  } catch (error) {
    console.log("convertion error", error.message);
  }
};

export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${url}/conversation/get`, data);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("convertion error", error.message);
  }
};

export const newMessage = async (data) => {
  try {
    axios.post(`${url}/message/add`, data);
  } catch (error) {
    console.log("new message error", error.message);
  }
};

export const getMessages = async (id) => {
  try {
    let response = await axios.get(`${url}/message/get/${id}`);
    return response.data;
  } catch (error) {
    console.log("get message error", error.message);
  }
};

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${url}/file/upload`, data);
  } catch (error) {
    console.log("Error while calling uploadFile api", error.message);
  }
};
