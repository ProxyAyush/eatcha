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
            accessToken: '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',
            owner:'ProxyAyush',
            repo:'eatcha'
        });
    }
}
