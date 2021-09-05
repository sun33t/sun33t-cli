import axios from 'axios';

export const fetchGitHubRepos = async () => {
  // fetch array of repos from GitHub
  const { data } = await axios({ method: 'get', url: 'https://api.github.com/users/sun33t/repos' });

  return data;
};
