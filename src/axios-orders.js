import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-c2e0d.firebaseio.com/"
});

export default instance;
