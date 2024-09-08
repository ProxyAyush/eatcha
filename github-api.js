// Import the GitHub API


    // GitHub API setup

    import { Octokit } from 'octokit'

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

