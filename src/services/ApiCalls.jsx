import axios from "axios";

class APICalls {
  async getRepoList() {
    const url = `https://api.github.com/orgs/godaddy/repos`;
    return await axios.get(url);
  }

  async getRepoDetails(repoName) {
    const url = `https://api.github.com/repos/godaddy/${repoName}`;
    return await axios.get(url);
  }
}

export default APICalls;
