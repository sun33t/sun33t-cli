import axios from 'axios';
import { gitHubHandle } from '../data';

export const fetchGitHubRepos = async () => {
  // fetch array of repos from GitHub
  const { data } = await axios({
    method: 'get',
    url: `https://api.github.com/users/${gitHubHandle}/repos`,
  });

  return data;
};
