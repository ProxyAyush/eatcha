const script = document.createElement('script');
script.src = "https://unpkg.com/@octokit/core@4/dist/index.js";
script.crossOrigin = "anonymous";
document.head.appendChild(script);

script.onload = async () => {

    // GitHub API setup

    window.octokit = new Octokit.Octokit({
        baseUrl: 'https://api.github.com',
        accessToken: 'your-github-token'
    });

    const repoOwner = 'ProxyAyush';
    const repoName = 'eatcha'; 

    window.createIssue = async (userInfo) => {
        // todo: validate the user info 

        const newIssue = await window.octokit.issues.create({
            owner: repoOwner,
            repo: repoName,
            title: 'New user info',
            body: `Here is the new user info: \n${JSON.stringify(userInfo)}`
        });
    }
}