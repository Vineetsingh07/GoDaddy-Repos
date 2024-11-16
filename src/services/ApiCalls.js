import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_NODE_JS_BASE_URL;

class APICalls {
  async getRepoList() {
    const url = `${BASE_URL}/orgs/godaddy/repos`;
    return await axios.get(url);
  }
}

export default APICalls;
