const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/octokit@latest/dist/index.min.js";
script.crossOrigin = "anonymous";
document.head.appendChild(script);

script.onload = async () => {

    // GitHub API setup
    const octokit = new Octokit.Octokit({
        baseUrl: 'https://api.github.com',
        accessToken: 'your-github-token'
    });

    const repoOwner = 'ProxyAyush';
    const repoName = 'eatcha'; 

    const createIssue = async (userInfo) => {
        // todo: validate the user info 
        const newIssue = await octokit.rest.issues.create({
            owner: repoOwner,
            repo: repoName,
            title: 'New user info',
            body: `Here is the new user info: \n${JSON.stringify(userInfo)}`
        });
    }
}