import axios from "axios";

const loginRest = async (username, secret) => {
  return await axios.get("", {
    headers: {
  
      "User-Name": username,
      "User-Secret": secret,
    },
  });
};

const signupRest = async (username, secret, email, first_name, last_name) => {
  return await axios.post(
    "https://api.chatengine.io/users/",
    { username, secret, email, first_name, last_name },
     
  );
};

export { loginRest, signupRest };