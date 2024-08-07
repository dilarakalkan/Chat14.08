import axios from "axios";
import globalVariables from "@/utils/globalVariables";

const {viteChateEngineProjectId,viteChateEnginePrivateKey} = globalVariables()
const loginRest = async (username, secret) => {
  return await axios.get("https://api.chatengine.io/users/me/", {
    headers: {
      "Project-ID": viteChateEngineProjectId.value,
      "User-Name": username,
      "User-Secret": secret,
    },
  });
};

const signupRest = async (username, secret, email, first_name, last_name) => {
  return await axios.post(
    "https://api.chatengine.io/users/",
    { username, secret, email, first_name, last_name },
    { headers: { "Private-Key": viteChateEnginePrivateKey.value } }
  );
};

export { loginRest, signupRest };