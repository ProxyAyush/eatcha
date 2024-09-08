const GitHub = require('github-api');

const repoOwner = 'ProxyAyush';
const repoName = 'eatcha';

const github = new GitHub({
  token: 'your-github-token',
});

const repo = github.getRepo(repoOwner, repoName);

function createIssue(userInfo) {
  repo.createIssue(userInfo, 'New user info', 'New user info submitted!')
}