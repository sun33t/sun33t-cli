import { fetchGitHubRepos, grey, green } from '../utils';
export const github = async () => {
  const data = await fetchGitHubRepos();

  const repos = data
    .sort((a: any, b: any) => {
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    })
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
