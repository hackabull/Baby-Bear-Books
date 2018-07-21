import axios from "axios";

const USER_URL = '/user'

export class userService {
  static queryForUsers(query) {
    return axios.get(`${USER_URL}/search/${query}`);
  }

  static createUser(user) {
    return axios.post(USER_URL, user);
  }

  static getUserbyId(id) {
    return axios.get(`${USER_URL}/${id}`);
  }

}