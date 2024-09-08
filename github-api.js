export async function createIssue(userInfo) {
    // todo: validate the user info 

    const octokit = new Octokit.Octokit({
        baseUrl: 'https://api.github.com',
        accessToken: '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'
    });
    const repoOwner = 'ProxyAyush';
    const repoName = 'eatcha'; 

    const newIssue = await octokit.issues.create({
        owner: repoOwner,
        repo: repoName,
        title: 'New user info',
        body: `Here is the new user info: \n${JSON.stringify(userInfo)}`
    });
}
