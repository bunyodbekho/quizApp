import axios from "axios";

const request = axios.create({
  baseURL: "https://6530d7bd6c756603295f23dd.mockapi.io/user",
});

export const getUsers = () => {
  return request.get("");
};

export const getUserByID = (id) => {
  return request.get(`/${id}`);
};

export const updateUserData = (id, body) => {
  return request.put(`/${id}`, body);
};

export const createUserData =(body) => {
  return request.post("", body)
}
