export class Octokit {
    constructor(options) {
        this.options = options;
    }

    issuesCreate(options) {
        // Use your logic to create an issue
        return fetch(`https://api.github.com/repos/${this.options.owner}/${this.options.repo}/issues`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.options.token}`, 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(options),
        }).then(response => response.json());
    }

    static getInstance() {
        return new Octokit({
            baseUrl: 'https://api.github.com',
            accessToken: 'your-git-key',
            owner:'ProxyAyush',
            repo:'eatcha'
        });
    }
}
