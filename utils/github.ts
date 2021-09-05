import { fetchGitHubRepos } from './api';
import { grey, green } from './colors';
export const github = async () => {
  const data = await fetchGitHubRepos();

  const repos = data
    .map((repo: typeof data) => {
      const repoUrl = repo.html_url;
      const repoUpdated = new Date(repo.updated_at);
      const day = repoUpdated.getDate();
      const month = repoUpdated.getMonth();
      const year = repoUpdated.getFullYear();
      return `
  ${green.underline(repoUrl)} : ${grey(`last updated on ${day}/${month}/${year}`)}
  `;
    })
    .join('');
  console.log(repos);
};
